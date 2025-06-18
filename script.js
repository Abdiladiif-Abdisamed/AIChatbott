const API_KEY = 'AIzaSyDppY9LZVQW7UtACpE4qNO9-51YN1AmrZ0'; 
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const typingIndicator = document.getElementById('typing-indicator');

// Function to add message to chat and save to local storage
function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');

    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-image');
    profileImage.src = isUser ? 'user.jpg' : 'bot.jpg';
    profileImage.alt = isUser ? 'User' : 'Bot';

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = message;

    messageElement.appendChild(profileImage);
    messageElement.appendChild(messageContent);

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Save the chat history to localStorage
    saveChatHistory();
}

// Function to generate response
async function generateResponse(prompt) {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: prompt
                }]
            }]
        })
    });

    if (!response.ok) {
        throw new Error('Failed to generate response');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

// Function to handle user input
async function handleUserInput() {
    const userMessage = userInput.value.trim();

    if (userMessage) {
        addMessage(userMessage, true);
        userInput.value = '';

        sendButton.disabled = true;
        userInput.disabled = true;

        // Show typing indicator
        typingIndicator.textContent = 'Bot is typing...';
        typingIndicator.style.display = 'block';

        try {
            let botMessage = '';

            // Check if message is a greeting (Hi, Hello)
            if (['hi', 'hello', 'hey', 'greetings'].some(greeting => userMessage.toLowerCase().includes(greeting))) {
                botMessage = `Hi! I'm an AI chatbot built by AbdiladiifDev, a professional developer. I'm here to assist you with business consulting and more. How can I help you today?`;
            } else {
                // Otherwise, generate response using Gemini API
                botMessage = await generateResponse(userMessage);
            }

            addMessage(botMessage, false);
        } catch (error) {
            console.error('Error:', error);
            addMessage('Sorry, I encountered an error. Please try again.', false);
        } finally {
            sendButton.disabled = false;
            userInput.disabled = false;
            userInput.focus();

            // Hide typing indicator
            typingIndicator.style.display = 'none';
        }
    }
}

// Function to save chat history to local storage
function saveChatHistory() {
    const messages = Array.from(chatMessages.getElementsByClassName('message')).map(message => {
        return {
            text: message.querySelector('.message-content').textContent,
            isUser: message.classList.contains('user-message')
        };
    });
    localStorage.setItem('chatHistory', JSON.stringify(messages));
}

// Function to load chat history from local storage
function loadChatHistory() {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
    chatHistory.forEach((message) => {
        addMessage(message.text, message.isUser);
    });
}

// Event listeners for sending messages
sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserInput();
    }
});

// Load previous chat history on page load
window.addEventListener('load', loadChatHistory);

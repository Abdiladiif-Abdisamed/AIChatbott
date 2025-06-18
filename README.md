# Chatbot Application

This is a chatbot application built with HTML, CSS, and JavaScript. It leverages Google's Gemini API for natural language processing to generate dynamic responses based on user input. The bot can assist users with various queries and provide responses in real-time. The application is designed with a clean and responsive interface, providing an engaging user experience. Chat history is stored in **localStorage**, so conversations are retained even after refreshing the page.

## Features

- **AI-Powered Responses**: The bot generates responses using Google's Gemini API, which allows for natural, human-like conversations.
- **Real-Time Interaction**: As users send messages, the bot responds instantly, simulating a live conversation.
- **Chat History**: The chat messages are displayed dynamically, and the chat history is stored in **localStorage**, allowing the conversation to persist even after page reloads.
- **Typing Indicator**: A typing indicator is shown while the bot is processing the response.
- **Clear Chat**: Users can clear the chat history both from the UI and **localStorage** with the **Clear Chat** button.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Google Gemini API (for generating responses)
- **Storage**: **localStorage** to store chat history

## Installation

To set up the chatbot application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chatbot-project.git
   cd chatbot-project


Open index.html in your preferred web browser.

Ensure that you have a valid Google Gemini API Key. If you do not have one, you can obtain it by signing up for the API via the Google Cloud Platform.

Replace the placeholder API_KEY in the JavaScript code with your valid API key:

    const API_KEY = 'your-google-api-key-here';

Usage

    Open the chatbot by launching the index.html file in your browser.

    Type a message in the input field and click the Send button or press Enter.

    The bot will generate a response based on the user’s message.

    To clear the conversation, click the Clear Chat button. This will remove the chat history from the UI and localStorage.

Example Interaction

    User: "Hello"

    Bot: "Hi! I'm an AI chatbot built by AbdiladiifDev, a professional developer. I'm here to assist you with business consulting and more. How can I help you today?"

How It Works

    User Input: The user types a message in the chat input field.

    Bot Processing: The message is sent to the Google Gemini API, which processes the text and generates a response.

    Response Display: The bot’s response is displayed in the chat window.

    Typing Indicator: A typing indicator is shown while the bot processes the user’s input and before the response is generated.

    

Contributing

Contributions are welcome! If you'd like to contribute to the development of this chatbot, feel free to fork the repository and submit a pull request with your improvements.
License

This project is licensed under the MIT License - see the LICENSE file for details


This version of the README now includes **localStorage** as part of the features and explains that the chat history is retained even after refreshing the page. You can now use this for your project! Let me know if you need any further adjustments.

// script.js

document.getElementById('send-button').addEventListener('click', function() {
    const input = document.getElementById('message-input');
    const messageText = input.value.trim();

    if (messageText) {
        // Create user message
        appendMessage(messageText, 'user');
        input.value = '';

        // Simulate contact response after a delay
        setTimeout(() => {
            appendMessage('This is a response from the contact.', 'contact');
        }, 1000);
    }
});

// Function to append messages to the chat
function appendMessage(text, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', sender);
    messageContainer.textContent = text;

    const chatMessages = document.getElementById('chat-messages');
    chatMessages.appendChild(messageContainer);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
}
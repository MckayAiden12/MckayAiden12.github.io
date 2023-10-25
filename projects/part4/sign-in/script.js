function sendEmail(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        // Simulate email sending - Replace this with your actual email sending logic.
        setTimeout(() => {
            const emailMessage = `Hello, ${name}! Your email has been sent.`;

            // Display the email message on the screen.
            const emailMessageElement = document.getElementById('email-message');
            emailMessageElement.textContent = emailMessage;
            emailMessageElement.style.display = 'block';

            // Clear the form fields
            document.getElementById('contact-form').reset();
        }, 2000);
    } else {
        // Show an error message if name or email is missing.
        alert('Please fill in all required fields.');
    }
}
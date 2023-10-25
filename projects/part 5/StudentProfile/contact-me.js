document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');
    
    // Basic email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        formMessage.innerHTML = '<p class="error-message">Please enter a valid email address.</p>';
        return;
    }

    try {
        // Send the form data to your server for processing and email sending
        const response = await fetch('/your-email-handler-endpoint', {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // Form submission successful
            formMessage.innerHTML = '<p class="success-message">Thank you for your message! We will get back to you soon.</p>';
            document.getElementById('contactForm').reset();
        } else {
            // Server returned an error
            formMessage.innerHTML = '<p class="error-message">An error occurred. Please try again later.</p>';
        }
    } catch (error) {
        console.error('Error:', error);
        formMessage.innerHTML = '<p class="error-message">An error occurred. Please try again later.</p>';
    }
});
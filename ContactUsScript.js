// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Optional: Send form data to server using AJAX or fetch API

    // Clear form fields after submission
    document.getElementById('contactForm').reset();

    // Optional: Show a success message to the user
});

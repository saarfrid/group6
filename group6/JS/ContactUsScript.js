document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validation for phone number
    const phonePattern = /^[0][0-9]{8,9}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number starting with 0 and consisting of 9 or 10 digits.');
        return;
    }

    const formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    sendDataToServer(formData);
    document.getElementById('contactForm').reset();
    showSuccessMessage('The message was sent successfully.');
});

function showSuccessMessage(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.top = '300px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = '#4CAF50';
    toast.style.color = 'white';
    toast.style.padding = '40px';
    toast.style.borderRadius = '5px';
    toast.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    toast.style.zIndex = '1000';
    document.body.appendChild(toast);

    setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(function() {
            toast.remove();
        }, 1000);
    }, 2000);
}

function sendDataToServer(formData) {
    // Here we would send the form data to the server for further processing
    // For now, we just log the data to the console
    console.log('Form data:', formData);
}

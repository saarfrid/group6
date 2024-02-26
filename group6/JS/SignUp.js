document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.querySelector('.signup-form');

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form inputs
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const gender = document.getElementById('gender').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const dob = document.getElementById('dob').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validation
        if (!validatePhoneNumber(phoneNumber)) {
            alert('Please enter a valid phone number - starting with 0 and consisting of 9 or 10 digits.');
            return; }
        if (!validateUsername(username)) {
            alert('Please enter a valid username - only English letters without spaces.');
            return; }
        if (!validatePassword(password)) {
            alert('Please enter a valid password - at least 6 characters, including one capital letter and one number.');
            return; }

        sendDataToDatabase({
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            email: email,
            phoneNumber: phoneNumber,
            dob: dob,
            username: username,
            password: password
        });

        signUpForm.reset();
        showMessage('The new profile has been successfully created!');
        setTimeout(function() {
            window.location.href = 'FirstPage.html';
        }, 3000);
    });

    function validatePhoneNumber(phoneNumber) {
        const phonePattern = /^[0][0-9]{8,9}$/;
        return phonePattern.test(phoneNumber);
    }
    function validatePassword(password) {
        const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
        return passwordPattern.test(password);
    }
    function validateUsername(username) {
        const usernamePattern = /^[A-Za-z]+$/;
        return usernamePattern.test(username);
    }
    function sendDataToDatabase(formData) {
        // Here we would send the form data to the server for further processing
        // For now, just log the data to the console
        console.log('Form data sent to database:', formData);
    }

    function showMessage(message) {
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.top = '300px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#4CAF50';
        toast.style.color = 'white';
        toast.style.padding = '50px';
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
        }, 3000);
    }
});

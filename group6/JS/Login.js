document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve username and password from form inputs
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if username and password match any record in the database
        if (checkCredentials(username, password)) {
            showMessage('The connection was successfully made!', 'green');
            setTimeout(function() {
                window.location.href = 'FirstPage.html';
            }, 2000);
        } else {
            alert('The Username or Password is incorrect. Please try again.');
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    });

    function checkCredentials(username, password) {
        const userData = [
            { username: 'Kfir', password: 'Kfir123' },
            { username: 'Saar', password: 'Saar123' },
            { username: 'Arseni', password: 'Arseni123' },
            { username: 'Racheli', password: 'Racheli123' },
        ];

        // Check if provided username and password match any record in the database
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].username === username && userData[i].password === password) {
                return true;
            }
        }
        return false;
    }

    function showMessage(message, color) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.top = '300px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = color;
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
        }, 2000);
    }
});

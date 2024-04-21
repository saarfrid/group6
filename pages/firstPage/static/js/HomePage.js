// When we connect the site to the database (third part), we will take the user's first name,and it will be written "Hello User"
document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('firstName');
    if (userName) {
        document.getElementById('userGreeting').textContent = 'Hello ' + userName;
    }
});

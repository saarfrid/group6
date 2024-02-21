// script.js

function startDisappearAnimation({selectedOption}) {
    var buttonsToDisappear = document.querySelectorAll('.box');

    buttonsToDisappear.forEach(function (button, index) {
        if (button !== selectedOption) {
            setTimeout(function () {
                button.style.transition = 'opacity 0.5s';
                button.style.opacity = '0';
            }, index * 500);
        }
    });

    // After the buttons have disappeared, leave the selected button for 1 second
    setTimeout(function () {
        redirectToOption(selectedOption);
    }, buttonsToDisappear.length * 500);
}

function redirectToOption(selectedOption) {
    // Add logic to redirect to the selected option
    switch (selectedOption) {
        case 'previousPurchases':
            window.location.href = 'previousPurchases.html';
            break;
        case 'likedProducts':
            window.location.href = 'likedProducts.html';
            break;
        // Add more cases as needed
        default:
            // Redirect to a default page if no valid option is provided
            window.location.href = 'defaultPage.html';
            break;
    }
}

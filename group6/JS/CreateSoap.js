
let shoppingCart = [];

function calculatePrice() {
    const selectedScent = document.querySelector('input[name="scent"]:checked');
    const selectedColor = document.querySelector('input[name="color"]:checked');
    const selectedAdditives = [...document.querySelectorAll('input[name="additives"]:checked')].map(checkbox => checkbox.value);
    const selectedSoapBase = document.querySelector('input[name="soap-base"]:checked');

    if (!selectedScent || !selectedColor || selectedAdditives.length === 0 || !selectedSoapBase) {
        alert("Please select options for scent, color, additives, and soap base.");
        return;
    }

    // Random but reasonable pricing (adjust as needed)
    const basePrice = 5; // Base price per selected option
    const randomMultiplier = Math.random() * (1.5 - 1) + 1; // Random multiplier between 1 and 1.5
    const totalPrice = Math.round((basePrice * (1 + selectedAdditives.length)) * randomMultiplier);

    alert(`Total Price: ${totalPrice} NIS`);
}

function createSoap() {
    const selectedScent = document.querySelector('input[name="scent"]:checked');
    const selectedColor = document.querySelector('input[name="color"]:checked');
    const selectedAdditives = [...document.querySelectorAll('input[name="additives"]:checked')].map(checkbox => checkbox.value);
    const selectedSoapBase = document.querySelector('input[name="soap-base"]:checked');

    if (!selectedScent || !selectedColor || selectedAdditives.length === 0 || !selectedSoapBase) {
        alert("Please select options for scent, color, additives, and soap base.");
        return;
    }

    // Create a soap object with selected details
    const soapDetails = {
        scent: selectedScent.value,
        color: selectedColor.value,
        additives: selectedAdditives,
        soapBase: selectedSoapBase.value
    };

    // Add the soap to the shopping cart
    shoppingCart.push(soapDetails);

    // Clear selected options
    clearSelectedOptions();

    alert("Soap added to shopping cart!");
}

function clearSelectedOptions() {
    // Clear selected options here
    const selectedScent = document.querySelector('input[name="scent"]:checked');
    const selectedColor = document.querySelector('input[name="color"]:checked');
    const selectedAdditives = document.querySelectorAll('input[name="additives"]:checked');
    const selectedSoapBase = document.querySelector('input[name="soap-base"]:checked');

    if (selectedScent) selectedScent.checked = false;
    if (selectedColor) selectedColor.checked = false;
    selectedAdditives.forEach(checkbox => checkbox.checked = false);
    if (selectedSoapBase) selectedSoapBase.checked = false;
}

 function calculatePrice() {
            const selectedScent = document.querySelector('input[name="scent"]:checked');
            const selectedColor = document.querySelector('input[name="color"]:checked');
            const selectedAdditives = [...document.querySelectorAll('input[name="additives"]:checked')].map(checkbox => checkbox.value);
            const selectedSoapBase = document.querySelector('input[name="soap-base"]:checked');

            if (!selectedScent || !selectedColor || selectedAdditives.length === 0 || !selectedSoapBase) {
                alert("Please select options for scent, color, additives, and soap base.");
                return; }

            // Random but reasonable pricing (adjust as needed)
            const basePrice = 5; // Base price per selected option
            const randomMultiplier = Math.random() * (1.5 - 1) + 1; // Random multiplier between 1 and 1.5
            const totalPrice = Math.round((basePrice * (1 + selectedAdditives.length)) * randomMultiplier);
            alert(`Total Price: ${totalPrice} NIS`); }

        function addSoapToCart() {
            const selectedScent = document.querySelector('input[name="scent"]:checked');
            const selectedColor = document.querySelector('input[name="color"]:checked');
            const selectedAdditives = [...document.querySelectorAll('input[name="additives"]:checked')].map(checkbox => checkbox.value);
            const selectedSoapBase = document.querySelector('input[name="soap-base"]:checked');
            if (!selectedScent || !selectedColor || selectedAdditives.length === 0 || !selectedSoapBase) {
                alert("Please select options for scent, color, additives, and soap base.");
                return;}
            // Create a soap object with selected details
            const soapDetails = {
                scent: selectedScent.value,
                color: selectedColor.value,
                additives: selectedAdditives,
                soapBase: selectedSoapBase.value
            };
            // Add the soap to the shopping cart
            shoppingCart.push(soapDetails);
            // Show success message
            alert("Soap added to shopping cart successfully!");
            // Clear selected options
            clearSelectedOptions(); }

        function clearSelectedOptions() {
            const selectedScent = document.querySelector('input[name="scent"]:checked');
            const selectedColor = document.querySelector('input[name="color"]:checked');
            const selectedAdditives = [...document.querySelectorAll('input[name="additives"]:checked')];
            const selectedSoapBase = document.querySelector('input[name="soap-base"]:checked');
            // Uncheck selected options
            if (selectedScent) selectedScent.checked = false;
            if (selectedColor) selectedColor.checked = false;
            selectedAdditives.forEach(checkbox => checkbox.checked = false);
            if (selectedSoapBase) selectedSoapBase.checked = false;
            // Hide soap details container
            document.getElementById('soapDetails').style.display = 'none';
        }
let shoppingCart = [];
function calculatePrice(){
    const selectedScent = document.querySelector('input[name="scent"]:checked');
    const selectedColor = document.querySelector('input[name="color"]:checked');
    const selectedAdditives = [...document.querySelectorAll('input[name="additives"]:checked')].map(checkbox => checkbox.value);
    const selectedSoapBase = document.querySelector('input[name="soap-base"]:checked');
    if (!selectedScent || !selectedColor || selectedAdditives.length === 0 || !selectedSoapBase) {
        alert("Please select scent, color, base ang additives.");
        return; }
    // In part B we use a random function to calculate the price, because there is still no database of prices from which the prices can be extracted.
    // In part C, this part will be replaced by a real calculation.
    const basePrice = 5;
    const randomMultiplier = Math.random() * (1.5 - 1) + 1;
    const totalPrice = Math.round((basePrice * (1 + selectedAdditives.length)) * randomMultiplier);
    alert(`Total Price: ${totalPrice} NIS`);
}
function addSoapToCart() {
    const selectedScent = document.querySelector('input[name="scent"]:checked');
    const selectedColor = document.querySelector('input[name="color"]:checked');
    const selectedAdditives = [...document.querySelectorAll('input[name="additives"]:checked')].map(checkbox => checkbox.value);
    const selectedSoapBase = document.querySelector('input[name="soap-base"]:checked');
    if (!selectedScent || !selectedColor || selectedAdditives.length === 0 || !selectedSoapBase) {
        alert("Please select options for scent, color, additives, and soap base.");
        return;}
    const soapDetails = {
        scent: selectedScent.value,
        color: selectedColor.value,
        additives: selectedAdditives,
        soapBase: selectedSoapBase.value
    };
    shoppingCart.push(soapDetails);
    showMessage("Soap added to shopping cart successfully!");
    clearSelectedOptions();
}

function showMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.style.position = 'fixed';
    messageElement.style.left = '50%';
    messageElement.style.transform = 'translateX(-50%)';
    messageElement.style.backgroundColor = 'green';
    messageElement.style.color = 'white';
    messageElement.style.borderRadius = '5px';
    messageElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    messageElement.style.zIndex = '1000';
    messageElement.style.marginTop = '10px';
    messageElement.style.padding = '25px';
    messageElement.style.fontSize = '15px';
    messageElement.style.textAlign = 'center';
    document.body.appendChild(messageElement);
    setTimeout(function() {
            messageElement.style.opacity = '0';
            messageElement.style.transform = 'translateX(-50%) translateY(20px)';
            setTimeout(function() {
                messageElement.remove();
            }, 1000);
        }, 3500);
}

function clearSelectedOptions() {
    const selectedScent = document.querySelector('input[name="scent"]:checked');
    const selectedColor = document.querySelector('input[name="color"]:checked');
    const selectedAdditives = [...document.querySelectorAll('input[name="additives"]:checked')];
    const selectedSoapBase = document.querySelector('input[name="soap-base"]:checked');
    if (selectedScent) selectedScent.checked = false;
    if (selectedColor) selectedColor.checked = false;
    selectedAdditives.forEach(checkbox => checkbox.checked = false);
    if (selectedSoapBase) selectedSoapBase.checked = false;
    document.getElementById('soapDetails').style.display = 'none';
}



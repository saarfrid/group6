// Function to handle soap creation
function createSoap() {
    // Get form data
    const scent = document.getElementById('scent').value;
    const color = document.getElementById('color').value;
    const additives = [...document.querySelectorAll('input[name="additives"]:checked')].map(input => input.value);
    const soapBase = document.getElementById('soapBase').value;

    // Create new soap object
    const newSoap = { scent, color, additives, soapBase };

    // Optional: Save the new soap to local storage or a database

    // Optional: Show a success message or navigate to another page
}

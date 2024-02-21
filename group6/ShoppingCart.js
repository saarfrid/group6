// ShoppingCartScript.js

// Dummy data representing soaps in the cart with added time information
const cartItemsData = [
    { timeAdded: getTime(), scent: 'Lavender', color: 'Purple', additives: ['Oatmeal', 'Honey'], soapBase: 'Coconut Oil' },
    { timeAdded: getTime(), scent: 'Peppermint', color: 'Blue', additives: ['Activated Charcoal'], soapBase: 'Shea Butter' },
    // Add more items as needed
];

// Function to get the current time in a readable format
function getTime() {
    const now = new Date();
    return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
}

// Function to dynamically populate the shopping cart table
function populateCartTable() {
    const cartTableBody = document.getElementById('cartItems');

    // Loop through each soap item in the cart data
    cartItemsData.forEach(item => {
        const row = document.createElement('tr');

        // Create table cells for each property of the soap item
        const timeAddedCell = document.createElement('td');
        timeAddedCell.textContent = item.timeAdded;
        row.appendChild(timeAddedCell);

        const scentCell = document.createElement('td');
        scentCell.textContent = item.scent;
        row.appendChild(scentCell);

        const colorCell = document.createElement('td');
        colorCell.textContent = item.color;
        row.appendChild(colorCell);

        const additivesCell = document.createElement('td');
        additivesCell.textContent = item.additives.join(', '); // Join additives with a comma
        row.appendChild(additivesCell);

        const soapBaseCell = document.createElement('td');
        soapBaseCell.textContent = item.soapBase;
        row.appendChild(soapBaseCell);

        // Append the row to the table body
        cartTableBody.appendChild(row);
    });
}

// Function to calculate and display the total price
function displayTotalPrice() {
    const totalPriceDiv = document.getElementById('totalPrice');

    // Calculate total price based on the number of items (dummy calculation)
    const totalPrice = cartItemsData.length * 5;

    // Display the total price in the specified format
    totalPriceDiv.textContent = `Total Price: ${totalPrice} NIS`;
}

// Call the functions to populate the table and display the total price
populateCartTable();
displayTotalPrice();

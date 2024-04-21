
// Dummy data, in part three we will pull the data from the database
const cartItemsData = [
    { timeAdded: getTime(), scent: 'Lavender', color: 'Purple', soapBase: 'Coconut Oil', additives: ['Oatmeal', 'Honey'] , price: 23},
    { timeAdded: getTime(), scent: 'Peppermint', color: 'Blue', soapBase: 'Shea Butter', additives: ['Activated Charcoal'] , price: 17}];

populateCartTable();
displayTotalPrice();


// Current time, in part three we will pull the data from the database
function getTime() {
    const now = new Date();
    return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
}
function populateCartTable() {
    const cartTableBody = document.getElementById('cartItems');
    cartItemsData.forEach(item => {
        const row = document.createElement('tr');
        const timeAddedCell = document.createElement('td');
        timeAddedCell.textContent = item.timeAdded;
        row.appendChild(timeAddedCell);
        const scentCell = document.createElement('td');
        scentCell.textContent = item.scent;
        row.appendChild(scentCell);
        const colorCell = document.createElement('td');
        colorCell.textContent = item.color;
        row.appendChild(colorCell);
        const soapBaseCell = document.createElement('td');
        soapBaseCell.textContent = item.soapBase;
        row.appendChild(soapBaseCell);
        const additivesCell = document.createElement('td');
        additivesCell.textContent = item.additives.join(', ');
        row.appendChild(additivesCell);
        const PriceCell = document.createElement('td');
        PriceCell.textContent = item.price;
        row.appendChild(PriceCell);
        cartTableBody.appendChild(row);
    });
}
function displayTotalPrice() {
    const totalPriceDiv = document.getElementById('totalPrice');
    const totalPrice = cartItemsData.reduce((total, item) => total + item.price, 0);
    totalPriceDiv.textContent = `Total Price: ${totalPrice} NIS`;
}



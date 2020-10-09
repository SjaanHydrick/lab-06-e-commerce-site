import { getFromLocalStorage, CART } from '../products/utils.js';
import { renderTableRow, calculateTotal } from './render-line-items.js';

const table = document.querySelector('tbody');
const orderButton = document.querySelector('button');
const cart = getFromLocalStorage(CART) || [];


for (let i = 0; i < cart.length; i++) {
    const spirit = cart[i];

    const tr = renderTableRow(spirit);

    table.appendChild(tr);
}

const total = calculateTotal(cart).toFixed(2);
const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;


orderButton.addEventListener('click', () => { 
    if (cart.length) {
        const stringyCart = JSON.stringify(cart, true, 2);

        alert(stringyCart);

        localStorage.removeItem(CART);
        window.location.href = '../index.html';
    } else {
        orderButton.disabled = true;
    }
});



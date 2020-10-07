import { cart } from '../products/data.js';
import { renderTableRow, calculateTotal } from './render-line-items.js';

const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const spirit = cart[i];

    const tr = renderTableRow(spirit);

    table.appendChild(tr);
}

const total = calculateTotal(cart).toFixed(2);

const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;

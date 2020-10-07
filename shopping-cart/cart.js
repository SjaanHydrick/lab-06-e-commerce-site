import { spirits, cart } from '../products/data.js';
import { renderTableRow } from './render-line-items.js';
import { findById } from '../products/utils.js';

const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const spirit = cart[i];

    const tr = renderTableRow(spirit);

    table.appendChild(tr);
}

const total = calculateTotal(cart);

const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;

export function calculateTotal(cart) {
    let accumulator = 0;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];

        const trueItem = findById(spirits, item.id);

        const subtotal = trueItem.price * item.quantity;

        accumulator = accumulator + subtotal;
    }

    return accumulator;
}
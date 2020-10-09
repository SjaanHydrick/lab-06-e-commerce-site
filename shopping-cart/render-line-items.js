
import { findById, calcLineItem, seedAndGetProducts } from '../products/utils.js';

export const localSpirits = seedAndGetProducts();

export function renderTableRow(cartItem) {

    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdImg = document.createElement('img');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdSubtotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    const spiritData = findById(localSpirits, cartItem.id);

    const price = spiritData.price;
    const name = spiritData.name;
    const image = spiritData.image;

    tdName.textContent = name;
    tdImg.src = `../Spirits/HappySpirits/${image}`;
    tdPrice.textContent = `$${price}.00`;

    const total = calcLineItem(cartItem.quantity, price).toFixed(2);

    tdSubtotal.textContent = `$${total}`;

    tr.append(tdName, tdImg, tdPrice, tdQuantity, tdSubtotal);

    return tr;

}

//new function location
export function calculateTotal(cart) {
    let accumulator = 0;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];

        const trueItem = findById(localSpirits, item.id);

        const subtotal = calcLineItem(trueItem.price, item.quantity);

        accumulator = accumulator + subtotal;
    }

    return accumulator;
}
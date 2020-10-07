import { spirits as sourceOfTruth } from '../products/data.js';
import { findById, calcLineItem } from '../products/utils.js';

export function renderTableRow(cartItem) {

    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdImg = document.createElement('img');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdSubtotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    const spiritData = findById(sourceOfTruth, cartItem.id);

    const price = spiritData.price;
    const name = spiritData.name;
    const image = spiritData.image;

    tdName.textContent = name;
    tdImg.src = `../Spirits/HappySpirits/${image}`;
    tdPrice.textContent = `$${price}`;

    const total = calcLineItem(cartItem.quantity, price);

    tdSubtotal.textContent = `$${total}`;

    tr.append(tdName, tdImg, tdPrice, tdQuantity, tdSubtotal);

    return tr;

}

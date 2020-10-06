import { renderSpirit } from './utils.js';
import { spirits } from './data.js';

const ul = document.querySelector('#list');

for (let i = 0; i < spirits.length; i++) {
    const spirit = spirits[i];

    const li = renderSpirit(spirit);

    ul.appendChild(li);
}
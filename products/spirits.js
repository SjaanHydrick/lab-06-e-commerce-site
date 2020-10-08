import { renderSpirit } from './utils.js';
import { spirits, spiritsSad, spiritsAngry } from './data.js';

const ul = document.querySelector('#list');

for (let i = 0; i < spirits.length; i++) {
    const spirit = spirits[i];

    const li = renderSpirit(spirit);

    ul.appendChild(li);
}

const ulSad = document.querySelector('#sad-spirits');

for (let i = 0; i < spiritsSad.length; i++) {
    const spiritSad = spiritsSad[i];

    const li = renderSpirit(spiritSad);

    ulSad.appendChild(li);
}

const ulAngry = document.querySelector('#angry-spirits');

for (let i = 0; i < spiritsAngry.length; i++) {
    const spiritAngry = spiritsAngry[i];

    const li = renderSpirit(spiritAngry);

    ulAngry.appendChild(li);
}
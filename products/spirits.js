import { renderSpirit, seedAndGetProducts } from './utils.js';

const spirits = seedAndGetProducts();

const ul = document.querySelector('#list');
const ulSad = document.querySelector('#sad-spirits');
const ulAngry = document.querySelector('#angry-spirits');
const ulSecondHand = document.querySelector('#used-spirits');


for (let i = 0; i < spirits.length; i++) {
    const spirit = spirits[i];

    const li = renderSpirit(spirit);
    if (spirit.category === 'Happy'){
        ul.appendChild(li);
    } else if (spirit.category === 'Sad'){
        ulSad.appendChild(li);
    } else if (spirit.category === 'Angry'){
        ulAngry.appendChild(li);
    } else {
        ulSecondHand.appendChild(li);
    }
}
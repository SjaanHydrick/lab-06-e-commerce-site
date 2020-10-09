import { spirits, spiritsSad, spiritsAngry } from '../products/data.js';

const spiritsArray = spirits.concat(spiritsSad);

const hardCodedSpirits = spiritsArray.concat(spiritsAngry);

export const CART = 'CART';
const PRODUCTS = 'PRODUCTS';

export function renderSpirit(spirit) {

    const li = document.createElement('li');
    const name = document.createElement('p');
    const image = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const dropDown = document.createElement('select');
    const button = document.createElement('button');

    li.classList.add('spirit');

    name.classList.add('name');
    name.textContent = spirit.name;

    li.appendChild(name);

    image.src = `../Spirits/HappySpirits/${spirit.image}`;

    li.appendChild(image);

    description.classList.add('description');
    description.textContent = spirit.description;

    li.appendChild(description);

    price.classList.add('price');
    price.textContent = `$${spirit.price}.00`;

    li.appendChild(price);

    dropDown.classList.add('dropDown');
    const num = new Option();
    num.value = 1;
    num.text = '1';
    dropDown.options.add(num);
    const num2 = new Option();
    num2.value = 2;
    num2.text = '2';
    dropDown.options.add(num2);
    const num3 = new Option();
    num3.value = 3;
    num3.text = '3';
    dropDown.options.add(num3);
    const num4 = new Option();
    num4.value = 4;
    num4.text = '4';
    dropDown.options.add(num4);
    const num5 = new Option();
    num5.value = 5;
    num5.text = '5';
    dropDown.options.add(num5);
    li.appendChild(dropDown);

    button.textContent = 'Add to Cart';

    button.addEventListener('click', () => {
        const cart = getFromLocalStorage(CART) || [];
        const itemInCart = findById(cart, spirit.id);
        if (itemInCart === undefined) {
            const newCartItem = {
                id: spirit.id,
                quantity: Number(dropDown.value),
            };
            cart.push(newCartItem);
        } else {
            itemInCart.quantity += Number(dropDown.value);
        }

        setInLocalStorage(CART, cart);
    });

    li.appendChild(button);

    return li;
}

export function findById(someArray, someId) {
    for (const item of someArray) {
        if (item.id === someId) {
            return item;
        }
    }
}

export function calcLineItem(quantity, price) {
    return quantity * price;
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}

export function getLocalStorageSpirits() {
    let localStorageSpirits = JSON.parse(localStorage.getItem(PRODUCTS));

    if (!localStorageSpirits) {
        const stringySpirits = JSON.stringify(hardCodedSpirits);

        localStorage.setItem(PRODUCTS, stringySpirits);
        localStorageSpirits = hardCodedSpirits;
    }

    return localStorageSpirits;
}

export function seedAndGetProducts() {
    const products = localStorage.getItem(PRODUCTS);
    if (products) {
        return JSON.parse(products);
    }
    const stringifiedSeedSpirits = JSON.stringify(hardCodedSpirits);

    localStorage.setItem(PRODUCTS, stringifiedSeedSpirits);

    const seededLocalSpirts = localStorage.getItem(PRODUCTS);
    
    return JSON.parse(seededLocalSpirts);
}

export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function addProduct(newSpirit) {
    const products = seedAndGetProducts();

    products.push(newSpirit);

    const stringifiedProducts = JSON.stringify(products);

    localStorage.setItem(PRODUCTS, stringifiedProducts);
}
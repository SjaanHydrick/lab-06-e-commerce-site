import { getLocalStorageSpirits, randomIntFromInterval } from '../products/utils.js';

const PRODUCTS = 'PRODUCTS';

export const form = document.querySelector('#form');


// export function addProduct(newSpirit) {
//     const products = seedAndGetProducts();

//     products.push(newSpirit);

//     const stringifiedProducts = JSON.stringify(products);

//     localStorage.setItem(PRODUCTS, stringifiedProducts);
// }


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const name = data.get('name');
    const id = name.replace(/ /g, '');
    const image = 'greenSpirit.jpg';
    const description = data.get('description');
    const category = 'used-spirits';
    const price = randomIntFromInterval(199, 1299);

    const newSpirit = {
        id: id,
        name: name,
        image: image,
        description: description,
        category: category,
        price: Number(price),
    };

    const localStorageSpirits = getLocalStorageSpirits();

    localStorageSpirits.push(newSpirit);

    const stringyLocalSpirits = JSON.stringify(localStorageSpirits);
    localStorage.setItem(PRODUCTS, stringyLocalSpirits);

});



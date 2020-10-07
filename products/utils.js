

export function renderSpirit(spirit) {

    const li = document.createElement('li');
    const name = document.createElement('p');
    const image = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
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

    button.textContent = 'Add to Cart';

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

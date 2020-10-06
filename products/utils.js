// id: 'happyChild',
// name: 'Flower Child',
// image: 'lavendarSpirit.jpg',
// description: 'Lovely young spirit from the 1970s. Will occassionally play records. A gardener in life, will help your flowers bloom.',
// category: 'Happy',
// price: 799,

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
    price.textContent = `$${spirit.price.toFixed(2)}`;

    li.appendChild(price);

    button.textContent = 'Add to Cart';

    li.appendChild(button);

    return li;

}

export function findById(someArray, someId) {
    for (const item of someArray) {
        if (item.id === someId) {
            return item;
        } else {
            return null;
        }
    }
}
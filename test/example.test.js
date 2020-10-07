// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderSpirit, findById, calcLineItem } from '../products/utils.js';
import { renderTableRow, calculateTotal } from '../shopping-cart/render-line-items.js';

const test = QUnit.test;

test('renders a spirit', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const happySpirit = {
            id: 'happySpirit',
            name: 'Happy Helper',
            image: 'lavendarSpirit.jpg',
            description: 'Enthusiastic spirit from late 1600s. Enjoys eliminating dust and humming away their troubles.',
            category: 'Happy',
            price: 699,
        },
    
    //Act 
    // Call the function you're testing and set the result to a const
        expected = '<li class="spirit"><p class="name">Happy Helper</p><img src="../Spirits/HappySpirits/lavendarSpirit.jpg"><p class="description">Enthusiastic spirit from late 1600s. Enjoys eliminating dust and humming away their troubles.</p><p class="price">$699.00</p><button>Add to Cart</button></li>';

    const dom = renderSpirit(happySpirit);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});

const princessChild = {
    id: 'princessChild',
    name: 'Pretty Princess',
    image: 'pinkSpirit.jpg',
    description: 'Lively spirit from the 1990s. Guaranteed to leave glitter behind. Always happy with a song.',
    category: 'Happy',
    price: 599,
};
    
const bookishSpirit = {
    id: 'bookishSpirit',
    name: 'Dedicated Reader',
    image: 'purpleSpirit.jpg',
    description: 'Late 1800s spirit. Fond of reading. Recommended for homes with expansive libraries.',
    category: 'Happy',
    price: 799,
};

const puppySpirit = {
    id: 'puppySpirit',
    name: 'Puppy Power',
    image: 'purpleSpirit2.jpg',
    description: 'Canine spirit, date unknown. Loves fetch, though cannot bring back stick.',
    category: 'Happy',
    price: 399,
};

const myArray = [
    princessChild,
    bookishSpirit,
    puppySpirit
];

test('takes in an array and an id and returns a matching item', (expect) => {

    //Arrange
    // Set up your arguments and expectations
    const myId1 = 'princessChild';
    const myId2 = 'puppySpirit';
    const expected1 = princessChild;
    const expected2 = puppySpirit;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = findById(myArray, myId1);
    const actual2 = findById(myArray, myId2);

    //Assert
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});

test('takes quantity and the price and returns the total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const quantity = 3;
    const price = 399;
    //Act 
    // Call the function you're testing and set the result to a const

    const actual = calcLineItem(quantity, price);

    //Expect
    const expected = 1197;
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renders a cart item', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const flowerChild = {
        id: 'flowerChild',
        quantity: 1,
    };
    
    //Act 
    // Call the function you're testing and set the result to a const

    const dom = renderTableRow(flowerChild);
    const html = dom.outerHTML;

    //Expect
    const expected = '<tr><td>Flower Child</td><img src="../Spirits/HappySpirits/lavendarSpirit.jpg"><td>$799.00</td><td>1</td><td>$799.00</td></tr>';

    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});

test('returns total price', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cart = [
        {
            id: 'bookishSpirit',
            quantity: 1,
        },
        {
            id: 'fishGhost',
            quantity: 2,
        }
    ];
    //Act 
    // Call the function you're testing and set the result to a const

    const actual = calculateTotal(cart);

    //Expect
    const expected = 1397;
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
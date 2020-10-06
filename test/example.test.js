// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderSpirit } from '../products/utils.js';

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

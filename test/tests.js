import { addProduct } from '../products/product-entry.js';

const test = QUnit.test;

test('addProduct should take in a product object and add it to local storage (returning nothing)', (expect) => {
    const newSpirit = {
        name: 'spooks',
        price: 299
    };
    const expectation = [
        {
            id: 'flowerChild',
            name: 'Flower Child',
            image: 'lavendarSpirit.jpg',
            description: 'Lovely young spirit from the 1970s. Loves music. A gardener in life, will help your flowers bloom.',
            category: 'Happy',
            price: 799,
        },
        {
            id: 'princessChild',
            name: 'Pretty Princess',
            image: 'pinkSpirit.jpg',
            description: 'Lively spirit from the 1990s. Guaranteed to leave glitter behind. Always happy with a song.',
            category: 'Happy',
            price: 599,
        },
        {
            id: 'bookishSpirit',
            name: 'Dedicated Reader',
            image: 'purpleSpirit.jpg',
            description: 'Late 1800s spirit. Fond of reading. Recommended for homes with expansive libraries.',
            category: 'Happy',
            price: 799,
        },
        {
            id: 'puppySpirit',
            name: 'Puppy Power',
            image: 'purpleSpirit2.jpg',
            description: 'Canine spirit, date unknown. Loves fetch, though cannot bring back stick.',
            category: 'Happy',
            price: 399,
        },
        {
            id: 'grandmaCookies',
            name: 'Doting Grandmother',
            image: 'yellowSpirit.jpg',
            description: 'Older spirit, circa 1950s. Will assist with recipes in kitchen. Always smells like fresh-baked cookies.',
            category: 'Happy',
            price: 899,
        },
        {
            id: 'fishGhost',
            name: 'Friendly Fish',
            image: 'whiteSpirit.jpg',
            description: 'A calming spirit of a well-loved goldfish. Emits bubbling sounds. Very low impact spirit.',
            category: 'Happy',
            price: 299,
        },{
            id: 'barnGhost',
            name: 'Fallen Rider',
            image: 'blueSpirit1.jpg',
            description: 'Trampled to death by horses, circa 1800s. Generally quiet. Perfect for adding a haunted element to a barn. Not recommended for stables.',
            category: 'Sad',
            price: 499,
        },
        {
            id: 'stuntmanSpirit',
            name: 'Stuntman Spirit',
            image: 'greenSpirit3.jpg',
            description: 'Stunt driver, early 1970s. Prefers garages or autoshops. Smells of burning rubber. Will alert owner to fires and car troubles.',
            category: 'Sad',
            price: 499,
        },
        {
            id: 'flySpirit',
            name: 'Fly Spirits',
            image: 'blueSpirit3.jpg',
            description: 'The spirit of a common house fly. Emits a constant buzzing sound. Perfect as a low-price gag-gift. To summon, leave trash uncovered.',
            category: 'Sad',
            price: 99,
        },
        {
            id: 'drownedWoman',
            name: 'Lady In The Water',
            image: 'pearlSpirit.jpg',
            description: 'Drowning victim, possibly late-1920s. Leaves wet footprints. Wails when it rains. Best suited for houses with pools, ponds, or lakes.',
            category: 'Sad',
            price: 299,
        },
        {
            id: 'victorianWaif',
            name: 'Classic Victorian',
            image: 'greenSpirit6.jpg',
            description: 'Child spirit from the Victorian era. Comes with small red ball. Perfect for a classic haunted feel. Often giggles throughout the night.',
            category: 'Sad',
            price: 599,
        },
        {
            id: 'eightiesSorority',
            name: 'Sorority Sister',
            image: 'goldSpirit.jpg',
            description: 'Sorority sister, circa late-1980s. Enjoys large crowds, excellent for parties. Tends to manifest anger if allowed to linger late into the night.',
            category: 'Sad',
            price: 399,
        },{
            id: 'jiltedBride',
            name: 'Jilted Bride',
            image: 'frostedSpirit.jpg',
            description: 'Jilted bride, circa early 1900s. Left at the alter in life, is violent towards young lovers. Will shatter windows and glass. Predictible haunting behaviors.',
            category: 'Angry',
            price: 1299,
        },
        {
            id: 'poisonedBusinessman',
            name: 'Poisoned CEO',
            image: 'greenSpirit5.jpg',
            description: 'Poisoned by a rival in mid-1900s. Highly volatile and unpredictable, most commonly attacks middle-aged men in suits. Breaks dishes and glasses. Smells of cigar smoke.',
            category: 'Angry',
            price: 1599,
        },
        {
            id: 'murderedHomeOwner',
            name: 'Murdered Home Owner',
            image: 'orangeSpirit.jpg',
            description: 'Classic murdered home owner poltergeist, date unknown. Shreds clothing, blocks doorways, and writes on walls in blood. Cannot be removed after tied to a house.',
            category: 'Angry',
            price: 1399,
        },
        {
            name: 'spooks',
            price: 299
        }
    ];

    //Arrange
    // Set up your arguments and expectations    //Act 
    // Call the function you're testing and set the result to a const
    addProduct(newSpirit);

    const localStorageAfter = JSON.parse(localStorage.getItem('PRODUCTS'));
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expectation, localStorageAfter);
});
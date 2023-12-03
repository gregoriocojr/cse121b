/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
    const article = document.createElement('article');

    const templeNameElement = document.createElement('h3');
    templeNameElement.textContent = temple.templeName;

    const imgElement = document.createElement('img');
    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.location;

    article.appendChild(templeNameElement);
    article.appendChild(imgElement);

    templesElement.appendChild(article);
    });
};



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

        const data = await response.json();

        templeList = data;

        displayTemples(templeList);

    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();

    const filter = document.querySelector('#sortBy').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;

        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;

        case 'older':
            const targetYear = 1950;
            displayTemples(temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0], 10);
                return year < targetYear;
            }));
            break;

        case 'all':
            default:
            displayTemples(temples);
            break;
    }
};

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });
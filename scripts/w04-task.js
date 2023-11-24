/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Gregorio A. Co, Jr.',
    photo: 'images/myImage.jpeg',
    favoriteFoods: [
        'Adobo',
        'Sinigang na Isda',
        'Papaitan',
        'Pinakbet',
        'Kilawen'
    ],
    hobbies: [
        'Playing chess',
        'Answering puzzles',
        'Watching movies'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push (
    {
        place: 'Cauayan City, Isabela',
        length: '12 years'
    },
    {
        place: 'Alicia, Isabela',
        length: '10 years'
    },
    {
        place: 'Imus City, Cavite',
        length: '18 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach (food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach (hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
let dlElement = document.querySelector('#places-lived');

myProfile.placesLived.forEach(place => {
    let dtElement = document.createElement('dt');
    dtElement.textContent = place.place;

    let ddElement = document.createElement('dd');
    ddElement.textContent = place.length;

    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});


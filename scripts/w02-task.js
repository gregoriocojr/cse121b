/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Gregorio A. Co, Jr.';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/myImage.jpeg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = [
    'Adobo',
    'Sinigang na Isda',
    'Papaitan',
    'Pinakbet',
    'Kilawen'];
foodElement.innerHTML = favoriteFoods.join(', ');
const newFavoriteFood = 'Inihaw na Isda';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
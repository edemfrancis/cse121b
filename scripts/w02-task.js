/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
var fullName = "Edem Francis";
var currentYear = 2024;
var profilePicture = "images/francis.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");

var imageElement = document.getElementById("profilepicture");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName}</strong>`;
yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute("alt", `Profile Name ${fullName}`);

/* Step 5 - Array */
var favoriteFoods = ["Potato", "Rice", "Afan soup", "Ogbono soup"];
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

var newFavoriteFood = ["Ice Cream"];
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;
favoriteFoods.pop()
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;


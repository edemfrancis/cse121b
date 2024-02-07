/* LESSON 3 - Programming Tasks */

/* Profile Object  */
var myProfile = {
    name: "Francis Edem",
    photo: "images/francis.jpg",
    favouriteFood: ["Beans and Plantain", "Eba and Ogbono soup with Chicken and Pomo"],
    hobbies: ["Football", "Playstation", "Movies", "Web dev"],
    placesLived: []
}



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "Lagos State, Nigeria",
    length: "14 Years"
})

myProfile.placesLived.push({
    place: "Cross River, Nigeria",
    length: "7 Years"
}, {
    place: "Enugu, Nigeria",
    length: "2 Months"
}, {
    place: "Ibandan, Nigeria",
    length: "1 Week"
}, {
    place: "Accra, Ghana",
    length: "2 Months"
})


/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;
/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;

/* Favorite Foods List*/
let foodArray = myProfile.favouriteFood;
let ulElement = document.getElementById("favorite-foods");
foodArray.forEach(item  => {
    let li = document.createElement("li");
    li.textContent = item;
    ulElement.appendChild(li);
});

/*let newElement = myProfile.favouriteFood.forEach(food);
let li = document.createElement("li");
li.textContent = newElement
document.getElementById("favorite-foods").appendChild(li);*/
/* Hobbies List */
myProfile.hobbies.forEach(items => {
    let ulElement = document.createElement("li");
    ulElement.textContent = items
    document.getElementById("hobbies").appendChild(ulElement)
})

/* Places Lived DataList */

myProfile.placesLived.forEach(places => {
    let dtElement = document.createElement("dt");
    let placeLived = places.place;
    dtElement.textContent = placeLived;
    document.getElementById("places-lived").append(dtElement);

    let ddElement = document.createElement("dd");
    let placeslived = places.length;
    ddElement.textContent = placeslived;
    document.getElementById("places-lived").appendChild(ddElement);
})
/*myProfile.placesLived.place.forEach(items => {
    let dtElement = document.createElement("dt");
    dtElement.textContent = items
    document.getElementById("places-lived").appendChild(dtElement);
})*/

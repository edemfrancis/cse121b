/* W05: Programming Tasks */
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeArray = [];
/* async displayTemples Function */
const displayTemples = (value) => {
    value.forEach(element => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = element.templeName;
        let img = document.createElement("img");
        img.setAttribute("src", element.imageUrl);
        img.setAttribute("attribute", element.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}
/* async getTemples Function using fetch()*/
const getTemples = async (temples) => {
    reset();
    const response = await fetch(temples);
    if (response.ok) {
        const data = await response.json();
        templeArray = data;
        console.log(data)
        displayTemples(data);
    }
}


/* reset Function */
function reset(){
    templesElement.innerHTML = "";
}

/* filterTemples Function */
function sortBy (temples) {
    reset()
    let filter = document.getElementById("filtered").value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(x => x.location.toLowerCase().includes('utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(x => !x.location.toLowerCase().includes('utah')));
            break;
        case 'older':
            displayTemples(temples.filter(x => new Date(x.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.log('Invalid filter option');
    }
}


/* Event Listener */
document.getElementById('filtered').addEventListener('change', () => {
    sortBy(templeArray);
});


getTemples(url);
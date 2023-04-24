// js

// DOM renderer
function renderOneAnimal(animal) {
    // build animal
    let card = document.createElement('li');
    card.className = 'card';
    card.innerHTML = `
        <div class="content">
            <h4>${animal.name}</h4>
            <p>
                $<span class="donation-count">${animal.donations}</span> Donated
            </p>
            <p>${animal.description}</p>
        </div>
        <div class="buttons">
            <button> Donate $10</button>
            <button> Set free</button>
        </div>
    `
    // add animal card to DOM
    document.querySelector('#animal-list').appendChild(card);
}

// <img src="${animal.imageUrl}"> // first in innerHTML

// get the data and render the animals to the DOM
function initialize() {
    animalData.forEach(animal => renderOneAnimal(animal));

}

// console.log(animalData);
initialize();
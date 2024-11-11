class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    hasSameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

const pets = [];

document.getElementById("petForm").addEventListener("submit", function (event) {
    event.preventDefault();

    //i dati presi dal form
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

   
    const pet = new Pet(petName, ownerName, species, breed);
    pets.push(pet);

    
    displayPets();

    
    document.getElementById("petForm").reset();
});

function displayPets() {
    const petList = document.getElementById("petList");
    petList.innerHTML = "";

    pets.forEach((pet, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerText = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
        petList.appendChild(listItem);
    });
}

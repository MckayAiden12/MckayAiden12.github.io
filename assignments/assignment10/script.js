// Toy class
class Toy {
    constructor(name, description, image, price, ageRange, rating) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
    }

    getDetails() {
        return `${this.name}: ${this.description}`;
    }

    getToyItem() {
        return {
            name: this.name,
            description: this.description,
            image: this.image,
            price: this.price,
            ageRange: this.ageRange,
            rating: this.rating,
        };
    }
}

// Array of toys
const toys = [
    new Toy("Tractor ", "", "images/tractor.jpg", "25 ", "3-7 years ", "4.5"),
    new Toy("Fidget toy ", "", "images/fidget.jpg", "4 ", "5+ years ", "4.2"),
    new Toy("Buzz ", "", "images/Buzz.jpg", "6 ", "3-8 years ", "4.7"),
    new Toy("Minion ", "", "images/minion.jpg", "100 ", "4-10 years ", "4.0"),
    new Toy("Clown ", "", "images/clown.png", "1 ", "2-6 years ", "4.3"),
    new Toy("Rocking Horse ", "", "images/horse.jpg", "10 ", "5-12 years ", "4.6"),
];

// Function to add toys to the DOM
function addToysToDOM() {
    const toysContainer = document.getElementById("toys-container");

    toys.forEach((toy, index) => {
        const toyElement = document.createElement("div");
        toyElement.classList.add("toy");

        const imgElement = document.createElement("img");
        imgElement.src = toy.image;
        imgElement.alt = toy.name;

        const descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("description-container");

        const toyName = document.createElement("span");
        toyName.textContent = toy.name;

        const toyDescription = document.createElement("span");
        toyDescription.textContent = toy.description;

        const toyPrice = document.createElement("span");
        toyPrice.textContent = "Price: $" + toy.price;

        const toyAgeRange = document.createElement("span");
        toyAgeRange.textContent = "Age Range: " + toy.ageRange;

        const toyRating = document.createElement("span");
        toyRating.textContent = "Rating: " + toy.rating;

        descriptionContainer.appendChild(toyName);
        descriptionContainer.appendChild(toyDescription);
        descriptionContainer.appendChild(toyPrice);
        descriptionContainer.appendChild(toyAgeRange);
        descriptionContainer.appendChild(toyRating);

        toyElement.appendChild(imgElement);
        toyElement.appendChild(descriptionContainer);
        toysContainer.appendChild(toyElement);
    });
}

// Function to show toy details
function showToyDetails(toy) {
    const toyDetails = document.getElementById("toy-details");
    const descriptionContainer = document.querySelector(".description-container");
    const toyName = document.getElementById("toy-name");
    const toyPrice = document.getElementById("toy-price");
    const toyAgeRange = document.getElementById("toy-age-range");
    const toyRating = document.getElementById("toy-rating");

    toyName.textContent = toy.name;
    toyPrice.textContent = "Price: $" + toy.price;
    toyAgeRange.textContent = "Age Range: " + toy.ageRange;
    toyRating.textContent = "Rating: " + toy.rating;

    descriptionContainer.style.display = "block";
    toyDetails.style.display = "block";
}

// Function to hide toy details
function hideToyDetails() {
    const toyDetails = document.getElementById("toy-details");
    toyDetails.style.display = "none";
}

addToysToDOM();
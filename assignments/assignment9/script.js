// Part 1 - Quotes

const quotes = [
    "Smoking kills. If you’re killed, you’ve lost a very important part of your life. –Brooke Shields",
    "You know it’s a bad day when you jump out of bed and miss the floor!  -Anonymous",
    "No one ever loved anyone the way that person wanted to be loved.  -Mignon McLaughlin",
    "They say marriages are made in Heaven. But, so is thunder and lightning. -Clint Eastwood",
    "When you’re in love make sure you really are in love and not just in love with the idea of being in love.  -Anonymous"
];

const quoteElement = document.getElementById("quote");
let currentQuoteIndex = 0;

function changeQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

// Set an initial quote
changeQuote();

// Change quote every 2 seconds
setInterval(changeQuote, 2000);

// Part 2 - Rainbow

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const rainbowContainer = document.getElementById("rainbow-container");

function createRainbow() {
    rainbowColors.forEach((color, index) => {
        setTimeout(() => {
            const paragraph = document.createElement("p");
            paragraph.style.backgroundColor = color;
            paragraph.style.height = "30px"; // Adjust the height to make colors touch
            paragraph.style.margin = "0"; // Remove margin between colors
            paragraph.style.padding = "0"; // Remove padding between colors
            rainbowContainer.appendChild(paragraph);

            // When all colors are added, show the pot of gold
            if (index === rainbowColors.length - 1) {
                setTimeout(() => {
                    const potOfGold = document.getElementById("pot-of-gold");
                    potOfGold.style.display = "block";
                }, 1000); // Adjust the timeout as needed
            }
        }, index * 1000); // Adjust the timeout as needed
    });
}

const rainbowButton = document.getElementById("rainbow-button");
rainbowButton.addEventListener("click", createRainbow);
const words = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Cherry",
    "Mango",
    "Watermelon",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Coconut",
    "Papaya",
    "Peach",
    "Apricot",
    "Kiwi",
    "Lemon",
    "Lime",
    "Raspberry",
    "Pomegranate",
    "Blackberry",
    "Carrot",
    "Potato",
    "Tomato",
    "Onion",
    "Cucumber",
    "Spinach",
    "Broccoli",
    "Cauliflower",
    "Lettuce",
    "Peas",
    "Pumpkin",
    "Zucchini",
    "Eggplant",
    "Radish",
    "Artichoke",
    "Turnip",
    "Celery",
    "Bellpepper",
    "Squash",
    "Beetroot",
    "Asparagus",
    "Corn",
    "Cilantro",
    "Parsley",
    "Basil",
    "Oregano",
    "Thyme",
    "Rosemary",
    "Dill",
    "Sage",
    "Bicycle",
    "Motorcycle",
    "Airplane",
    "Helicopter",
    "Train",
    "Ship",
    "Bus",
    "Taxi",
    "Rocket",
    "Skateboard",
    "Scooter",
    "Segway",
    "Wheelchair",
    "Submarine",
    "Spaceship",
    "Hotairballoon",
    "Blimp",
    "Tricycle",
    "Golfcart",
    "Ferriswheel",
    "Rollercoaster",
    "Trolley",
    "Hoverboard",
    "Snowmobile",
    "Yatch",
    "Elephant",
    "Giraffe",
    "Lion",
    "Tiger",
    "Kangaroo",
    "Zebra",
    "Crocodile",
    "Hippopotamus",
    "Rhinoceros",
    "Dolphin",
    "Shark",
    "Whale",
    "Penguin",
    "Flamingo",
    "Peacock",
    "Parrot",
    "Sparrow",
    "Eagle",
    "Falcon",
    "Ostrich",
    "Owl",
    "Raccoon",
    "Hedgehog",
    "Armadillo",
    "Chameleon"
];

const index = Math.floor(Math.random() * 100)
const randomWord = words[index].toLocaleLowerCase()
//document.getElementById("word").textContent = `${randomWord}`

const characters = document.getElementById('characters')

const inputLetter = document.getElementById("inputLetter")
const letterSpans = characters.getElementsByTagName('span');
let strikes = 0;
let lettersUsed = []


for (let i = 0; i < randomWord.length; i++) {
    const letterSpan = document.createElement('span');
    letterSpan.textContent = '__'; // Initially show as underscores
    letterSpan.classList.add('letter-box');
    document.getElementById('characters').appendChild(letterSpan)
}


document.getElementById("letterForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    if (!lettersUsed.includes(inputLetter.value)) {
        lettersUsed.push(inputLetter.value.toLocaleLowerCase())
        document.getElementById("lettersUsed").textContent = `Letters used: ${lettersUsed.toString()}`
    }

    if (randomWord.includes(inputLetter.value)) {
        indecies = []
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === inputLetter.value.toLowerCase()) {
                indecies.push(i)
            }
        }

        indecies.forEach(i => {
            letterSpans[i].textContent = inputLetter.value.toLowerCase()
        });

        document.getElementById("feedback").textContent = `Nice! You got a letter!`
    } else {
        document.getElementById("feedback").textContent = `Nope! There's no ${inputLetter.value.toLowerCase()} in this!`
        checkIfPlayerLost()
    }
    inputLetter.value = ''
})

document.getElementById("wordForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const inputWord = document.getElementById("inputWord")

    if (inputWord.value.toLowerCase() == randomWord) {
        for (let i = 0; i < randomWord.length; i++) {
            letterSpans[i].textContent = randomWord[i]
        }
        document.getElementById("feedback").textContent = `Wow! You got the whole word! You win 🥳!`
    } else {
        document.getElementById("feedback").textContent = `Oops, that's not it.`
        checkIfPlayerLost()
    }
    inputWord.value = ''
})

const refreshButton = document.getElementById('refreshBtn');
        
    refreshButton.addEventListener('click', function() {
        location.reload();
    });


function checkIfPlayerLost() {
    strikes += 1
    document.getElementById("strikes").textContent = `Strikes: ${strikes}`
    if (strikes == 6) {
        document.getElementById("feedback").textContent = `Sorry, you lose. The word was ${randomWord}.`
        for (let i = 0; i < randomWord.length; i++) {
            letterSpans[i].textContent = randomWord[i]
        }
    }
}

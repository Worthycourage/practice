const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let noClicking = false;

const GIFs = [
  "https://giphy.com/embed/krr1ocAhrsyuCOpl6p",
  "https://giphy.com/embed/xThuWl7sV12hg7TXWg",
  "https://giphy.com/embed/iLBQAlaft9NU4",
  "https://giphy.com/embed/2IudUHdI075HL02Pkk",
  "https://giphy.com/embed/unxCGmTuBvwo2djRLA",
  "https://giphy.com/embed/q7ghjrKpGeMda",
  "https://giphy.com/embed/ZATzNdxHjkL6e11bJN",
  "https://giphy.com/embed/krr1ocAhrsyuCOpl6p",
  "https://giphy.com/embed/xThuWl7sV12hg7TXWg",
  "https://giphy.com/embed/iLBQAlaft9NU4",
  "https://giphy.com/embed/2IudUHdI075HL02Pkk",
  "https://giphy.com/embed/unxCGmTuBvwo2djRLA",
];

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledGIFS = shuffle(GIFS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForGIFS(gifArray) {
  for (let gif of gifArray) {
    const newDiv = document.createElement("div");
    newDiv.dataset.url = gif;
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

function handleCardClick(e) {
  if (noClicking) return;
  if (e.target.classList.contains("flipped")) return;

  let currentCard = e.target;
  currentCard.style.backgroundImage = currentCard.dataset.url;

  if (!card1 || !card2) {
    currentCard.dataset.url.add("flipped");
    card1 = card1 || currentCard;
    card2 = currentCard === card1 ? null : currentCard;
  }

  if (card1 && card2) {
    noClicking = true;
    // debugger
    let gif1 = card1.dataset.url;
    let gif2 = card2.dataset.url;

    if (gif1 === gif2) {
      cardsFlipped += 2;
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      card1 = null;
      card2 = null;
      noClicking = false;
    } else {
      setTimeout(function () {
        card1.style.backgroundImage = "";
        card2.style.backgroundImage = "";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        noClicking = false;
      }, 1000);
    }
  }

  if (cardsFlipped === GIFS.length) alert("game over!");
}

createDivsForColors(shuffledGifs);
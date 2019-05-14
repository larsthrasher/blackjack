let deck = [];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let suits = ["S", "C", "H", "D"];

// building deck
const buildDeck = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let card = {
        num: arr1[i],
        suit: arr2[j],
        value: i + 2,
        imgSRC: `<img src= "images/JPEG/${arr1[i]}${
          arr2[j]
        }.jpg" width="150px">`
      };
      deck.push(card);
    }
  }
  return deck;
};
buildDeck(values, suits);

// Shuffling deck by drawing random card

const drawRandomCard = () => {
  let randoNum = Math.floor(Math.random() * deck.length);
  let randomCard = deck[randoNum];
  if (
    randomCard.num === "J" ||
    randomCard.num === "Q" ||
    randomCard.num === "K"
  ) {
    randomCard.value = 10;
  }
  if (randomCard.num === "A") {
    randomCard.value = 11;
  }
  return randomCard;
};

// adding card values

let addCards = (cardValArr) => {

       let redce = (a, c) => a + c
       return cardValArr.reduce(redce)
   }

// dealing cards 
   const dealCards = () => {

       const hand = [drawRandomCard(), drawRandomCard()];
       document.getElementById('p1c1').innerHTML = hand[0].imgSRC;
       p1c2.innerHTML = hand[1].imgSRC;
       return addCards([hand[0].value, hand[1].value]);

   }

   const dealCardss = () => {

       const hand = [drawRandomCard(), drawRandomCard()];
       p2c1.innerHTML = hand[0].imgSRC;
       p2c2.innerHTML = hand[1].imgSRC
       return addCards([hand[0].value, hand[1].value]);

   }

   const restart = () => {
       location.reload();
   }

   addPCards = dealCards();
   addDCards = dealCardss();

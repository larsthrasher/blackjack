let deck = [];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let suits = ["S", "C", "H", "D"];

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

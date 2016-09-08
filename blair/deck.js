
// WHO ARE YOU??????
// Add your code to a folder 
Deck = function() {
  this.cards;
  this.reset();
};


Deck.prototype.reset = function() {
  var values = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'];
  var suits = ['Hearts','Spades','Clubs','Diamonds'];

  var cards = [];

  for (i=0; i<values.length; i++) {
    for (j=0; j<suits.length; j++) {
      var card = values[i] + ' of ' + suits[j];
      cards.push(card);
    }
  }
  this.cards = cards;
  return this;
  
};


Deck.prototype.shuffle = function() {
  var shuffledDeck = [];

  while (this.cards.length > 0) {
    var index = Math.floor(Math.random()*this.cards.length);
    var card = this.cards.splice(index, 1)[0];
    shuffledDeck.push(card);
  }

  this.cards = shuffledDeck;
  return this;

}


Deck.prototype.deal = function() {
  var index = Math.floor(Math.random()*this.cards.length);
  var card = this.cards.splice(index, 1)[0];

  return card;
}


Player = function(name) {
  this.name = name;
  this.hand = [];

}

Player.prototype.takeCard = function(deck) {
  this.hand.push(deck.deal()); 
  return this; 
}

Player.prototype.discardCard = function(cardIndex) {
  this.hand.splice(cardIndex, 1);
  return this;
}


/* Some tests to ensure things are working...

d = new Deck();
console.log(d.cards);

d.shuffle();
console.log(d.cards);

p1 = new Player();
p2 = new Player();

p1.takeCard(d).takeCard(d).takeCard(d);
console.log(p1.hand);

p2.takeCard(d).takeCard(d).takeCard(d);
console.log(p2.hand);

p1.discardCard().discardCard();
p2.discardCard();

console.log(p1.hand);
console.log(p2.hand);

*/

// Looks good, I like that you used card index in discard card instead of just discaring top card.
// Keep up the good work. 





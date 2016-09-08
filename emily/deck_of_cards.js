/********************* Card constructor and methods ***************************/

// Card object constructor
var Card = function(value, suit) {
  this.value = value;
  this.suit = suit;
  this.card = value + suit[0]; // value and first letter of suit

  return this;
}

/********************* Deck constructor and methods ***************************/

// Deck object constructor
var Deck = function() {
  this.cards = [];
  return this;
}

// reset Deck of cards
Deck.prototype.reset = function() {
  console.log("reset deck");
  var suits = ['Heart', 'Spade', 'Diamond', 'Club'];
  var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

  // start with empty deck
  this.cards = [];

  // instantiate new Card and push into deck for all combo of suits and values 
  for (var s = 0; s < suits.length; s++) { // suits
    for (var v = 0; v < values.length; v++) { // values
      this.cards.push(new Card(values[v], suits[s])); 
    }
  }
  return this;
}

// print out the cards
Deck.prototype.show = function() {
  var cards = [];
  for (var i = 0; i < this.cards.length; i++ ) {
    cards.push(this.cards[i].card);
  }

  // print cards as a JSON string
  console.log(JSON.stringify(cards));
  return this;
}

// shuffle the deck
Deck.prototype.shuffle = function() {
  console.log("shuffling");
  // fisher-yates shuffle
  for (var i = this.cards.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i +1));

    // swap with card at random index
    var temp = this.cards[i];
    this.cards[i] = this.cards[rand];
    this.cards[rand] = temp; 
  }
  return this;
}

// deal a random card by popping off last one from deck and returning it
Deck.prototype.deal = function() {
  console.log("deal one");
  dealt = this.cards.pop();
  console.log(dealt.card);
  return dealt;
}

/********************* Player constructor and methods ***************************/
// Player object constructor
var Player = function(name) {
  this.name = name;
  this.hand = [];

  console.log('Player:', this.name);
  return this;
}

// player draws a card dealt from deck and adds to hand
Player.prototype.draw = function(deck) {
  console.log("drawing a card");
  this.hand.push(deck.deal());
  return this;
}

// player discards a card from hand
Player.prototype.discard = function(card) {
  if (!this.hand.length) {
    console.log("hand is empty");
    return this;
  }

  console.log(card ? "discard " + card : "discard one");
  if (card) { // discard specific card
    // search for the card in the hand to discard 
    for (var i = 0; i < this.hand.length; i++) {
      if (this.hand[i].card == card) {
        this.hand.splice(i, 1); // remove card at the position where found 
      }
    }
    return this;
  } else { // discard last card of the hand
    this.hand.pop();
    return this;
  }
}

// show player's hand
Player.prototype.show_hand = function() {
  var hand = [];
  for (var i = 0; i < this.hand.length; i ++) {
    hand.push(this.hand[i].card);
  }
  console.log(hand);
  return this;
}

/********************* instantiation and callers ********************************/

deck = new Deck();
deck.reset();
deck.show().shuffle().show();
deck.deal();
deck.show();

joe = new Player('Joe');
joe.draw(deck).show_hand();
joe.draw(deck).draw(deck).draw(deck).draw(deck).show_hand();
joe.discard().show_hand();
joe.discard(joe.hand[0].card).show_hand();

// Looks great keep up the good work --Oscar 
// Make sure to keep on adding comments like this when the assignments get more complex. Awesome Job!

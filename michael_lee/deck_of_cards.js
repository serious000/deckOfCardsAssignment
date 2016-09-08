function DeckConstructor(){
  var suit = ["\u2660","\u2665","\u2666","\u2663"];
  var value = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
  this.cards = [];

  for (var i = 0; i < suit.length; i++){
    for (var j = 0; j < value.length; j++){
      this.cards.push(new Card(suit[i],value[j]));
    }
  }
}

function Card(suit,value){
  this.suit = suit;
  this.value = value;
}

function PlayerConstructor(name){
  this.name = name;
  this.hand = [];
}

DeckConstructor.prototype.shuffle = function(){
  for (var i = 0; i < this.cards.length; i++){
    randomIndex = Math.floor(Math.random()*this.cards.length);
    var temp = this.cards[randomIndex];
    this.cards[randomIndex] = this.cards[i];
    this.cards[i] = temp;
  }
}

DeckConstructor.prototype.reset = function(){
  var suit = ["\u2660","\u2665","\u2666","\u2663"];
  var value = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
  this.cards = [];
  for (var i = 0; i < suit.length; i++){
    for (var j = 0; j < value.length; j++){
      this.cards.push(new Card(suit[i],value[j]));
    }
  }
};

DeckConstructor.prototype.deal = function(){
  return this.cards.splice(0,1);
};

PlayerConstructor.prototype.takeCard = function(deck){
  return this.hand.push(deck.deal());
};

PlayerConstructor.prototype.discard = function(index){
  this.hand.splice(index,1);
}

var Deck = new DeckConstructor();
var Michael = new PlayerConstructor('Michael');
Deck.shuffle();
console.log(Deck.cards);
Michael.takeCard(Deck);
Michael.takeCard(Deck);
Michael.takeCard(Deck);
console.log("This is " + Michael.name + "'s hand: ");
console.log(Michael.hand);
console.log(Deck);
// when drawing you should check to see whether the deck is empty and if it's empty just reset the deck and then draw.
// That way when drawing you won't receive a null value from the deck if it's empty
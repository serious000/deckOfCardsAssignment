
//Deck Constructor
function Deck() {
    this.cards = [];
}

//Card Constructor
function Card (values, suit){
    this.values = values;
    this.suit = suit;
}

//Player Constructor
function Player(name, hand){
    this.name = name;
    this.hand = [];

}

//Method for Deck
Deck.prototype.createDeck = function(){
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var suit = ["Heart", "Diamond", "Club", "Spade"];
    this.cards = [];
    for ( var i = 0; i < suit.length; i++) {
        for ( var num = 0; num < values.length; num++){
            this.cards.push( new Card(values[num], suit[i]));
        }
    return this;
    }
}


//Shuffle the cards
Deck.prototype.shuffle = function () {
    for (var i = 0; i < this.cards.length; i++) {
        var temp = this.cards[i],
        pick = Math.floor(Math.random() * this.cards.length);
        this.cards[i] = this.cards[pick];
        this.cards[pick] = temp;
    }
    return this;
}


//Reset the cards
Deck.prototype.reset = function(){
    this.createDeck();
}

//Deal
Deck.prototype.deal = function(){
    return this.cards.pop();
}

//Take card
Player.prototype.takeCard = function(deck) {
    this.hand.push(deck.deal());
    return this;
}


//Discard
Player.prototype.discardCard = function(deck) {
    deck.cards.push(this.hand.shift());
    return this;
}

var john = new Player("John");
var deck = new Deck();

console.log(deck.cards.length);
john.takeCard(deck).takeCard(deck);
console.log(john.hand);

// This looks great! Good job. 
// The only thing I would say is that when we discard a card we shouldn't be pushing it into the deck. We should just get rid of it.
// This is me nitpicking, but in a game it would be weird if we just push the cards that we discard into the deck, we usually wait for the 
// deck to be empty and then reset the deck. 


// DECK CONSTRUCTOR AND PROTOTYPES
class Deck {
    constructor() {
        this.cards = [];
        this.suits = ['hearts', 'clubs', 'diamonds', 'spades'];
        this.values = [...Array(14).keys()];
    }
}
Deck.prototype.generateDeck = function() {
    this.cards = [];
    for (suit of this.suits) {
        for (value of this.values) {
            this.cards.push(new Card(suit, value))
        }
    }
    return this;
}
Deck.prototype.show = function() {
    for (card of this.cards) {
        console.log(card.show());
    }
    return this;
};
Deck.prototype.shuffle = function() {
    var numCards = this.cards.length;
    for (card in this.cards) {
        random = Math.floor(Math.random() * (numCards));

        temp = this.cards[card];
        this.cards[card] = this.cards[random];
        this.cards[random] = temp;
    }
    return this;
};
Deck.prototype.deal = function(playerList, numCards) {
    for (var i = 0; i < numCards; i++) {
        for (player of playerList) {
            this.draw(player);
        }
    }
    return this;
}
Deck.prototype.draw = function(player) {
    if (this.cards.length > 0 ) {
        player.hand.push(this.cards[0]);
        this.cards.splice(0,1);
    }
    return this;
};

// CARD CONSTRUCTOR AND PROTOTYPES
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}
Card.prototype.show = function() {
    return this.value + " of " + this.suit;
};


// PLAYER CONSTRUCTOR AND PROTOTYPES
var playerList = [];
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        playerList.push(this);
    };
};
Player.prototype.draw = function(deck) {
    deck.draw(this);
    return this; // return deck?
}
Player.prototype.discard = function(cardIndex) {
    this.hand.splice(cardIndex,1);
    return this;
}
Player.prototype.show = function() {
    console.log(this.name, this.hand);
    return this;
}


deck1 = new Deck
deck1.generateDeck().show();
console.log("\n\n\n");
console.log(deck1.cards)
console.log("\n\n\n");
deck1.shuffle();
console.log(deck1.cards)
console.log("\n\n\n");
deck1.show();

console.log("\n\n\n");
player1 = new Player("Zak");
player2 = new Player("David");
player3 = new Player("Jeremy");
player4 = new Player("Cliff");

player1.show();
player1.draw(deck1);
player1.show();
deck1.deal(playerList, 7);
deck1.show();
player1.discard(0);
player1.show();

// This looks great, for that Player.prototype.draw = function(deck){deck.draw(this);return this;}
// In that case you are returning the instance of player. 
// Keep up the good work it looks good 

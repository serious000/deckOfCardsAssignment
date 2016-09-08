function Card(value, suit, picture){
	this.value = value;
	this.suit = suit;
	this.picture = picture;
}

function Deck(){
	this.cardDeck = [];
	var suits = ["\u2660", "\u2665", "\u2666", "\u2663"];
	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	for (i = 0; i < 4; i++){
		for (j = 0; j < 13; j++){
			this.cardDeck.push(new Card(values[j], suits[i],values[j].concat(suits[i]) ) );
		}
	}
}

Deck.prototype.show = function(){
	var displayDeck = [];
	for(var i = 0; i < this.cardDeck.length; i++){
		displayDeck.push(this.cardDeck[i].picture);
	}
	console.log(displayDeck.toString());
}

Deck.prototype.reset = function(){
	this.cardDeck = [];
	var suits = ["\u2660", "\u2665", "\u2666", "\u2663"];
	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	for (i = 0; i < 4; i++){
		for (j = 0; j < 13; j++){
			this.cardDeck.push(new Card(values[j], suits[i],values[j].concat(suits[i]) ) );
		}
	}
	return this;
}

Deck.prototype.shuffle = function(){
	deckLength = this.cardDeck.length;
	for(i = 0; i < deckLength; i++){
		newIndex = Math.floor(Math.random()*deckLength);
		var temp = this.cardDeck[i];
		this.cardDeck[i] = this.cardDeck[newIndex];
		this.cardDeck[newIndex] = temp;
	}
	return this;
}

Deck.prototype.deal = function(){
	return this.cardDeck.pop();
}


//#####################

function Player(name){
	this.name = name;
	this.hand = [];
}

Player.prototype.draw = function(deck){
	this.hand.push( deck.deal() );
}

Player.prototype.showHand = function(){
	console.log(this.hand);
}

Player.prototype.discard = function(suit, value){
	if (suit && value){
		for (var i = 0; i < this.hand.length; i++) {
			if (this.hand[i].value == value && (this.hand[i].suit == suit)) {
				this.hand.splice(i,1);
				return this;
			}
		}
	}
}


var newDeck = new Deck();
newDeck.show();
var Carlos = new Player(Carlos);
Carlos.draw(newDeck);
Carlos.draw(newDeck);
Carlos.draw(newDeck);
Carlos.showHand();
newDeck.show();
Carlos.discard("\u2663", 'K');
Carlos.showHand();
// newDeck.reset();
// newDeck.show();
// newDeck.shuffle();
// newDeck.show();

// Great job, you even did more than what was asked for in the assignment instructions. Keep it up!
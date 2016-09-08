'use strict';
// initializing class Card
function Card(suit, val){
	this.suit = suit;
	this.val = val;
}

// initializing class Deck
var Deck = (function(){
	var suits = ['clubs', 'hearts', 'diamonds', 'spades']
	var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

	function InitDeck(){
		this.cards = (function(){
			var arr = [];
			for (var i = 0; i < suits.length; i++){
				for (var j = 0; j < values.length; j++){
					arr.push(new Card(suits[i], values[j]));
				}
			}
			return arr;
		})();
	}
	InitDeck.prototype.shuffle = function(){
		var j, temp;
		for (var i = this.cards.length; i; i--) {
			j =  Math.floor(Math.random() * i);
			temp = this.cards[i-1];
			this.cards[i-1] = this.cards[j];
			this.cards[j] = temp;
		}
		// console.log(this.cards.length);
		return this;
	};
	InitDeck.prototype.reset = function(){
		this.cards = (function(){
			var arr = [];
			for (var i = 0; i < suits.length; i++){
				for (var j = 0; j < values.length; j++){
					arr.push(new Card(suits[i], values[j]));
				}
			}
			return arr;
		})();
		this.shuffle();
		return this;
	};

	InitDeck.prototype.deal = function(){
		var random = Math.floor(Math.random()*this.cards.length);
		return this.cards.splice(random, 1);
	};


	return InitDeck;
})();

////// testing class Deck ////////
var test = new Deck();
console.log(test.cards);
test.shuffle();
console.log(test.cards);
test.reset();
console.log(test.cards);
// console.log(test.deal());
// console.log(test.cards.length);

// initializing class Player
function Player(name){
	this.name = name;
	this.hand = [];
}

// Player.prototype.takeCard = function(){
// 	this.hand.push(test.deal()); // using an instance of the Deck class
// 	return this; 
// };

// better to pass an instance of the deck as a parameter
Player.prototype.takeCard = function(deck){
	this.hand.push(deck.deal()); 
	return this; 
};
Player.prototype.discardCard = function(card){
	for (var i = 0; i < this.hand.length; i++){
		if(card == this.hand[i]){
			this.hand.splice(i, 1);
		}
	}
	return this;
};
////// testing class Player ////////
var person = new Player("PlayerONe");

console.log(person.takeCard(test).takeCard(test).takeCard(test).hand);
person.discardCard(person.hand[2]);
console.log(person.hand);

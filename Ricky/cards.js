// <--------Deck------------>

function Deck(){
	this.cards = [];

}
Deck.prototype.reset = function (){
	var suit = ['spade', 'diamond', 'heart', 'club'],
		values = ["A",2,3,4,5,6,7,8,9,10,"J","Q", "K"];
	this.cards = [];
	for(var i=0; i < suit.length; i++){
		for(var j =0; j < values.length; j++){
			this.cards.push(new Card(suit[i], values[j]));
		}
	}
}

Deck.prototype.show = function(){
	console.log(this.cards);
}

Deck.prototype.shuffle = function (){
	for(var i =0; i < this.cards.length; i++){
		var temp = this.cards[i];
			rand = Math.floor(Math.random()*this.cards.length);
		this.cards[i] = this.cards[rand];
		this.cards[rand] = temp;
	}
}

Deck.prototype.deal = function(){
	return this.cards.pop();
}

// <--------Cards------------>

function Card(suit, value){
	this.suit = suit;
	this.value = value;
}

Player.prototype.discard = function(){
	if(this.cards){
		for(var i =0; i< this.hand.length; i++){
			if(this.hand[i] == this.cards){
				this.hand.splice(i, 1);
				return this;
			}
		}
	} else {
		this.hand.pop();
		return this;
	}
}

// <--------Player------------>

function Player (name){
	this.name = name;
	this.hand = [];
}

Player.prototype.show = function(){
	console.log('Player:', this.name);
	console.log('Hand:', this.hand);
	return this;
}

Player.prototype.draw = function (deck){
	this.hand.push(deck.deal());
}


// <--------Calls------------>
var deck = new Deck();
deck.reset();
deck.show();
deck.shuffle();
deck.show();
console.log(deck.deal());

var ricky = new Player('Ricky');
ricky.show();
ricky.draw(deck);
ricky.draw(deck);
ricky.draw(deck);
ricky.draw(deck);
ricky.draw(deck);
ricky.show().discard().show();
ricky.draw(deck)
ricky.show();
// ## Deck contructor includes cards

function Deck(suit, value){
	this.cards = [];
	this.suit = suit;
	this.value = value;
}

// ### creating and reset deck

Deck.prototype.reset = function(){
	this.cards = [];
	this.suit = ['Heart', 'Diamond', 'Club', 'Spades'];
	this.value = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];
	for(var i= 0; i< this.suit.length; i++){
		for(j=0; j< this.value.length; j++){
			this.cards.push(this.suit[i]+this.value[j]);
		};
	};
	return this;
}
// ## shuffle cards

Deck.prototype.shuffle = function(){
	for(var i= 0; i< this.cards.length; i++){
		rand = Math.floor(Math.random() * this.cards.length);
		var temp = this.cards[i];
		this.cards[i] = this.cards[rand];
		this.cards[rand] = temp;
	};
	return this;
}
// ## show cards
Deck.prototype.show = function(){
   this.show = this.cards[Math.floor(Math.random()*this.cards.length)];
   console.log("SHOW CARD:" +this.show);
   return this;

}
// ## deal cards , pop one card at a time.
Deck.prototype.deal = function(){
	return this.cards.pop(this.show);
}

// ##Player constructor

function Player(name){
	this.name = name;
	this.hand = [];
}
// ##player show
Player.prototype.show = function(){
	console.log("Player:", this.name);
	console.log("Hand:", this.hand);
	return this;
}
// ##player draw cards from deck(deal())
Player.prototype.draw = function(){
	this.player_cards = this.hand.push(deck.deal());
	return this;
}
// ##player discard card one at a time
Player.prototype.discard = function(){
	this.hand.pop(this.player_cards);
	return this;
}

var deck = new Deck();
deck.reset();
deck.shuffle().show();
deck.deal();
console.log(deck);


var ankita = new Player("Ankita");
ankita.draw(deck).draw(deck).draw(deck).draw(deck).draw(deck);
ankita.show().discard().show().discard().show().discard();









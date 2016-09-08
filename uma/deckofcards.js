/*------------------------------Deck--------------------------*/

function Deck(){
	// PRIVATE
	var cards = [];

	//inserts all 13 cards for a particular suit (used in reset)
	function cards_for_suit(suit){
		for(var i = 2; i <= 10; i++){
			cards.push(suit + i);
		}
		cards.push(suit + 'A');
		cards.push(suit + 'J');
		cards.push(suit + 'Q');
		cards.push(suit + 'K');
	}

	// PUBLIC
	this.reset = function(){
		cards = [];

		//spades
		cards_for_suit('S');

		//clubs
		cards_for_suit('C');

		//diamonds
		cards_for_suit('D');

		//hearts
		cards_for_suit('H');

		return this;
	}

	//call reset to initialize deck
	this.reset();

	this.get_cards = function(){
		return cards;
	}

	
}

Deck.prototype.deal = function(){
	//get last card in deck
	var card = this.get_cards()[this.get_cards().length-1];
	this.get_cards().pop();
	return card;
}

Deck.prototype.shuffle = function(){
	for(var i = 0; i < this.get_cards().length-1; i++){
		//find position to swap with
		var index = Math.floor( (Math.random() * (51 - i + 1)) + i);
		//swap cards
		var temp = this.get_cards()[i];
		this.get_cards()[i] = this.get_cards()[index];
		this.get_cards()[index] = temp;
	}
	return this;
}

Deck.prototype.show = function(){
	console.log(this.get_cards());
}

/*------------------------------Player------------------------*/

function Player(name){
	//PUBLIC
	this.name = name;
	this.hand = [];
}

Player.prototype.draw = function(deck){
	this.hand.push(deck.deal());
	return this;
}

Player.prototype.discard = function(card){
	if(card){
		var index = this.hand.indexOf(card);
		if(index > -1)
			this.hand.splice(index, 1);
	} else{
		this.hand.pop();
	}
	return this;
}

Player.prototype.view_hand = function(){
	console.log(this.hand);
}

// Mostly this looks good, refer to how Howard created his deck during his demo. I like the idea of making a card into it's own obejct instead.
// of just making each card into a string. If we wan't to make this into an actual game later on we would have to parse the string for the values
// and it would make it tougher on us later on.

// I do like the way that you handle discard, using indexOf for card makes it alot easier to find the card we're trying to discard. 



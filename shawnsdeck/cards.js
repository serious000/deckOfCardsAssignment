function Deck(){
	this.deck =[]
}
	Deck.prototype.reset = function(){
		var value = [2,3,4,5,6,7,8,9,10,'A','K','Q','J'];
		var suit = ['S','C','D','H'];
		for(var i = 0; i < suit.length; i++){
			for(var j = 0; j < value.length; j++){
				this.deck.push(value[j]+suit[i]);
			}
		}
		return this; 
	}
	Deck.prototype.shuffle = function(){
		var current = this.deck.length;
		while (0 !== current){
			rand = Math.floor(Math.random() * current);
			current -= 1;

			temp = this.deck[current];
			this.deck[current] = this.deck[rand];
			this.deck[rand] = temp;
		}	
	}
	Deck.prototype.deal = function (){
		return this.deck.pop();
	}

function Person(name){
	this.name = name; 
	this.hand = [];
	this.draw = function(deck){
		this.hand.push(deck.deal());
		return this;
	}
	this.discard = function(param){
		for(var i =0; i<this.hand.length; i++){
			if(this.hand[param] == this.hand[i]){
				this.hand.splice(i,1);
				return this;
			}
		}
		this.hand.pop();
		return this;
	}
}

var deck = new Deck();
deck.reset();
deck.shuffle();
deck.deal();

var shawn = new Person('Shawn');
shawn.draw(deck).draw(deck).draw(deck).draw(deck).draw(deck);
console.log(shawn.hand);
shawn.discard(2);
console.log(shawn.hand);
//  I would like you to use howards demo as an example though, he made each card into its own object as well. Creating the card as a 
// string makes it tougher to use if we ever make this into an actual game because then we're going to have to parse the card string to get it's values.

// Besides that it looks good and clean, keep up the good work!
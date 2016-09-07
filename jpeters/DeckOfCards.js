function deck(){
	this.stack=[];
	if (!(this instanceof deck)) {
   		return new deck();
 	}
}
// _______________________________________________reset
deck.prototype.reset = function(){
		var face_val = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
		var suit = [' of Hearts',' of Clubs',' of Spades', ' of Diamonds'];
	
		for(var i in suit) {
			for(var j in face_val){
				this.stack.push(face_val[j]+suit[i]);
			}
		}
		this.shuffle()
}
// _______________________________________________shuffle
deck.prototype.shuffle =  function() {
  		for (var i = 0 ; i < this.stack.length; i++) {
    		var j = Math.floor(Math.random() * (i));
    		var temp = this.stack[i];
    		this.stack[i] = this.stack[j];
    		this.stack[j] = temp;
  		}
	}
// _______________________________________________deal
deck.prototype.deal = function(){
	return this.stack.pop();
}
// _______________________________________________FUNCTION PLAYER
function player(name, deck) {
	this.name = name;
	this.hand = [];

	if (!(this instanceof player)) {
   		return new player(name,deck);
 	}
}
// _______________________________________________DRAW
player.prototype.draw = function(deck){
		return this.hand.push(deck.deal());
}
// _______________________________________________DISCARD
player.prototype.discard = function(deck){
		return this.hand.pop();
}
// _______________________________________________
	


var bob = player('bob',tim);

var tim = deck()
tim.reset()
console.log(tim.deal())


bob.draw(tim);
bob.draw(tim);
bob.draw(tim);	
bob.discard();
console.log(bob.name);
console.log(bob.hand);









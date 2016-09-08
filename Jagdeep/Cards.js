function deck (){
	this.cards=[]
}

deck.prototype.reset = function(){
	var value = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
	var suits = ["spade", "diamond", "club", "heart"];
	this.cards = [];
	for (var i in suits){
		for (var j in value){
			this.cards.push(new Card(suits[i], value[j]));
		}
	}
}

deck.prototype.show = function(){
	var show_cards = [];
	for (var i=0; i<this.cards.length; i++){
		show_cards.push(this.cards[i]);
	}
	console.log(show_cards)
	return this;
}
deck.prototype.shuffle = function(){
	for (var i = 0; i<this.cards.lenght; i++){
		var temp = this.cards[i],
			rand= Math.floor(Math.random()*this.cards.length);

		this.cards[i]=this.cards[rand];
		this.cards[rand] = temp;
	}
	return this;
}
deck.prototype.deal= function(){
	return this.cards.pop();
}

function Card(suits,value){
	this.suits = suits;
	this.value=value;
}

function Player(name){
	this.name=name;
	this.hand = [];
}

Player.prototype.show = function(){
	console.log("player name", this.name);
	console.log("player hand", this.hand);
	return this;
}

Player.prototype.draw = function(deck){
	this.hand.push(deck.deal());
	return this;
}

Player.prototype.discard = function(){
	for (var i=0;i<this.hand.length; i++){
		this.hand.pop();
		return this;
}
}

var deck = new deck();
deck.reset();
deck.show().shuffle().show();
console.log(deck.deal());
deck.show();
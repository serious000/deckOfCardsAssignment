function DeckConstructor (){
	var deck = []
	var suits = ["Spade", "Heart", "Diamond", "Club"]
	var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

	this.createdeck = function (){
		for (s in suits){
			for (n in numbers){
				card = suits[s] + numbers[n]
				deck.push(card)
			}
		}
		// console.log(deck)
	}

	this.shuffledeck = function(){
		var i = 0;
		var j= 0;
		var temp = 0;

		for (i = deck.length - 1; i>0; i -= 1){
			j = Math.floor(Math.random()*(i+1))
			temp = deck[i];
			deck[i] = deck[j];
			deck[j] = temp;
		}
		console.log("deck is shuffled")
		console.log(deck)
	}

	this.dealdeck = function(){
		var dealtcard = deck.pop()
		return dealtcard
		console.log("card was dealt")
		console.log(dealtcard)
		console.log(deck)
	}

	this.resetdeck = function(){
		deck = []
		this.createdeck()
		console.log("deck is reset")
		console.log(deck)
	}
}

function Player(name, hand){
	this.name = name
	this.hand = []
}

Player.prototype.takecard = function(){
	this.hand.push(game.dealdeck())
	console.log("Player's hand")
	console.log(this.hand)
}

Player.prototype.discard = function(){
	this.hand.pop()
	console.log("Player discard")
	console.log(this.hand)
}

game = new DeckConstructor()
game.createdeck()
game.shuffledeck()

player = new Player()
player.takecard()
player.takecard()
player.takecard()
player.takecard()
player.discard()



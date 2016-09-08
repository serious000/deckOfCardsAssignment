function DeckConstructor(){

  //52 cards???? I think...
  this.deck = ["AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH",
                  "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS",
                  "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC",
                  "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD"];
  this.cards = [];

  //shuffle
  DeckConstructor.prototype.shuffle = function(){
    this.mix = this.deck[Math.floor(Math.random() * this.deck.length)]; //returns random card in deck
    return this.mix;
  }

  //reset
  //deal
  //method should return the card that was dealt and remove it from stack
  DeckConstructor.prototype.deal = function(){
    this.card = this.shuffle();
    console.log("Random Card Pulled: " + this.card + " Number of cards in deck: " + this.deck.length);
    for(var idx = 0; idx < this.deck.length; idx++)
    {
      if(this.card == this.deck[idx]){
        this.cards.push(this.deck[idx]);
        this.deck.splice(idx, 1); //remove card from deck
      }
      else{
        console.log("Not your Card, Bruh!");
      }
    }
      console.log(this.cards);
      console.log(this.deck.length); //returns the remainder of cards
  }
  DeckConstructor.prototype.displayHand = function(){
    console.log(this.cards);
  }
}
function PlayerConstructor(name){
  DeckConstructor.call(this);

  //player name
  this.name = name;

  //player cards
  this.hand = [];

  PlayerConstructor.prototype.deal = function(){
    console.log(this.deck.length);
  }

  //discard
  PlayerConstructor.prototype.discard = function(){
    this.hand.splice(1, 1);
  }
}

//stuff
var random = new DeckConstructor();
var James = new PlayerConstructor("James");
James.hand.push(random.deal(), random.deal(), random.deal(), random.deal(), random.deal());
James.hand.splice(2, 1, random.deal(), random.deal(), random.deal(), random.deal());
random.displayHand();

// I think we can make the deck construction a lot cleaner. I would suggest more like the approach that Howard used in his demo yesterday. 
// It's best if we make each card into a seperate object. 

// Also we should make the PlayerConstructor have a method called draw that would take care of drawing a card from the deck. We shouldn't be 
// push into the players hand from outside of the class, becuase it's going to be extra work for us later. 
// Make sure to watch the demo that howard posted and refactoring some of this code at a later date. If you wan't some more feedback on this
// code just make sure to send a new pull request and I'll check it out
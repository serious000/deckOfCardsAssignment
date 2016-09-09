function Deck() {
  this.cards = [];
}

Deck.prototype.reset = function() {
  var suit = ['spade', 'heart', 'diamond', 'club'];
  var values = ['A', 2,3,4,5,6,7,8,9,10, 'J', 'Q', 'K'];
  // reset this.cards
  this.cards = [];
  // Suits
  for (var i = 0; i < suit.length; i++) {
    // values
    for (var j = 0; j < values.length; j++) {
      this.cards.push(new Card(suit[i], values[j]));
    }
  }
}

function Card(suit, value) {
  this.suit = suit;
  this.value = value;
  this.short = suit[0] + value;
}

Deck.prototype.show = function() {
  var show_cards = [];

  for (var i = 0; i < this.cards.length; i++) {
    show_cards.push(this.cards[i].short);
  }
  console.log(JSON.stringify(show_cards));
  return this;
}

Deck.prototype.shuffle = function() {
  var rand, temp;
  for (var i=0; i < this.cards.length; i++) {
    rand = Math.floor(Math.random()*this.cards.length);
    temp = this.cards[i];
    this.cards[i] = this.cards[rand];
    this.cards[rand] = temp;
  }
  // console.log(JSON.stringify(this.cards));
  return this;
}

Deck.prototype.deal = function() {
  return this.cards.pop();
};

function Player( name ) {
  this.name = name;
  this.hand = [];
}

Player.prototype.show = function() {
  console.log('Player name: ', this.name);
  console.log('Player Hand: ', this.hand);
  return this;
};

Player.prototype.take = function(deck) {
  this.hand.push(deck.deal());
  return this;
};

Player.prototype.discard = function( short ) {
  if ( short ) {
    // discard short
    for (var i = 0; i < this.hand.length; i++) {
      if ( this.hand[i] == short ) {
        this.hand.splice(i, 1);
        return this;
      }
    }
  }
  else {
    this.hand.pop();
    return this;
  }
}

// var card = new Card( 'spade', '2');
// console.log(card);
var deck = new Deck();
deck.reset();
deck.show().shuffle().show();
console.log(deck.deal().short);
deck.show();

player = new Player('Alex');
player.show();
player.take(deck).take(deck).take(deck).take(deck).take(deck);
player.show();
player.show().discard().show().discard(player.hand[0]).discard(player.hand[2]);
player.show();
var Card = function(val, suit) {
    this.value = val;
    this.suit = suit;
    this.string = (isNaN(val) ? val.slice(0,1) : val) + suit[0];
}

var Deck = function() {
    var _deck = []; // private
    //var self = this;

    this.getArray = function() {
        console.log("copy! " + _deck.length);
        return _deck.splice(0, _deck.length);
        //return clone(_deck);
    };

    this.reset = function() {
        _deck = [];
        var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
        //https://en.wikipedia.org/wiki/Playing_cards_in_Unicode
        var suits = ["\u2660", "\u2665","\u2666","\u2663"]
        for (var i = 0; i < values.length; i++) {
            for (var j = 0; j < suits.length; j++) {
                _deck.push(new Card(values[i], suits[j]));
            }
        }
        return this;
    }

    this.shuffle = function() {
        for (var i = _deck.length - 1; i > 0; i--)
        {
            var j = Math.floor(Math.random() * i);
            var temp = _deck[i];
            _deck[i] = _deck[j];
            _deck[j] = temp;
        }
        return this;
    }

    this.deal = function () {
        return _deck.pop();
    }
}

//make a copy
function clone(obj) {
    //console.log("cloning");
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

Deck.prototype.print = function() {
    var cards = [];
    var this_deck = this.getArray();
    for (var i = 0; i < this_deck.length; i++)
        cards.push(this_deck[i].string);
    console.log("(" + cards.length + ")" + JSON.stringify(cards));
    return this;
}

var Player = function (name) {
    this.name = name;
    var _hand = [];

    this.draw = function(deck) {
        _hand.push(deck.deal());
        return this;
    }

    this.getHandArray = function() {
        //return _hand;
        return clone(_hand);
    };

    this.print = function() {
        var str = "{ Player : " + this.name + ", Hand : ";
        var hand = [];
        for (var i = 0; i < _hand.length; i++)
            hand.push(_hand[i].string);
        str += JSON.stringify(hand) + " }";
        console.log(str);
        return this;
    }

    this.discard = function(cardStr) {
        if (cardStr) {
            for (var i = 0; i < _hand.length; i++) {
                if (_hand[i].string === cardStr) {
                    _hand.splice(i, 1);
                    return this;
                }
            }
        }
        //if not found or not specified, pick random card to discard
        var i =  Math.floor(Math.random() * _hand.length);
        _hand.splice(i, 1);
        return this;
    }
};

var mydeck = new Deck();
mydeck.reset();

var tempArr = mydeck.getArray();  //get a copy of the Deck array
console.log("Size of original deck=" + mydeck.getArray().length);
//modifying a copy of the Deck array doesn't modify the Deck
console.log("Size of array copy=" + tempArr.length);
tempArr.push("11");
console.log("Size of array copy after modification=" + tempArr.length);
console.log("Size of original deck=" + mydeck.getArray().length);
mydeck.print();

var card = mydeck.print().shuffle().print().deal();
console.log(card.string);
mydeck.print();

console.log("\n\nEnter player!")
var varian = new Player("Varian");
varian.discard();
varian.draw(mydeck).draw(mydeck).draw(mydeck).draw(mydeck).draw(mydeck).print();
mydeck.print();
varian.discard(varian.getHandArray()[0].string).print();
varian.discard().print();

// This is a very good approach as well, I like the practice of setting your private variables with a _ right infront. This 
// is used very often in source code. When i send out my example I'll show a method used so that you can use private variables 
// and prototypes. 
// Great Job, keep it up!

//class for card should include the name and suit
class Card {
    constructor (value, suit)
    {
        this.value = value;
        this.suit = suit;
    }
    
   
    
    //convert from number to string. 
    toString(){
        let show_value ="";
        let show_suit ="";
       

        if(this.suit == 1)
        {
            show_suit = "Spade"  
        }
        if(this.suit == 2)
        {
            show_suit = "Club"  
        }
        if(this.suit == 3)
        {
            show_suit = "Diamond"  
        }
        if(this.suit == 4)
        {
            show_suit = "Heart"  
        }
      

        if (this.value == 1)
        {
            show_value = "Ace";
        }
        if (this.value == 11)
        {
            show_value = "Jack";
        }
        if (this.value == 12)
        {
            show_value = "Queen";
        }
        if (this.value == 13)
        {
            show_value = "King";
        }
        else{
            show_value = this.value;
        }
       
        return show_value+" "+show_suit ;

        
    }

   

}
//class deck that include an array of cards
class Deck {
    constructor(){
        this.cards = [];
    }
    addCard(){
        for (let i = 1 ; i <5; i+=1)
        {
            for (let j = 1; j < 14;j++)
            {
                this.cards.push (new Card (j,i));
            }
        }

        
    }

    shuffleCard(){
        
            for (let i = this.cards.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = this.cards[i];
              this.cards[i] = this.cards[j];
              this.cards[j] = temp;
            }
    }
}
//class Player that include the name and point. Also, hold an array of card
class Player{
    constructor(name,point){

        this.name = name;
        this.point = point;
        this.cards =[];
    }

    addPoint(){

        this.point += 1; 
        return this;
    }
    showPoint(){

        return this.point;
    }

    addCard(name,suit){
        this.cards.push (new Card (name,suit));
    }

    
}
//class game that hold array of player.
 
class Game {

    constructor(){

        this.players = []
        
    }
    addPlayer(name,point)
    {
        this.players.push (new Player(name,point));
0    }
    
}



//create a new game with 2 players 
let game = new Game();
game.addPlayer("Player 1", 0);
game.addPlayer("Player 2", 0);


//create a deck
//add cards to deck and shuffle it
let deck = new Deck();
deck.addCard();
deck.shuffleCard();





//deal the card to Player
for (let i = 0 ; i <52 ; i++)
{
    if(i%2 ==0)
    {
        game.players[0].addCard(deck.cards[i].value,deck.cards[i].suit)
    }
    else
    {
        game.players[1].addCard(deck.cards[i].value,deck.cards[i].suit)
    }
}


var show_Card = "";
var show_suit = "";
//play the game
for (let i = 0 ; i <26; i ++)
{
    console.log(`
Turn ${i + 1}
    Player 1 has ${game.players[0].cards[i].toString()}
    Player 2 has ${game.players[1].cards[i].toString()}
    `)

    if (game.players[0].cards[i].value > game.players[1].cards[i].value)
    {
        console.log ("   Player 1 win ");
        game.players[0].addPoint();
    }
    if(game.players[0].cards[i].value < game.players[1].cards[i].value) {
        console.log ("    Player 2 win ");
        game.players[1].addPoint();
    }
    if(game.players[0].cards[i].value == game.players[1].cards[i].value)
    {
        console.log ("    Tie result");
    }

    
}
console.log(`

    Final Result:
    Player 1 has ${game.players[0].point} points
    Player 2 has ${game.players[1].point} points`);

    if(game.players[0].point > game.players[1].point)
    {
        console.log (" Player 1 win the game ");
    }
    else if (game.players[0].point <  game.players[1].point)
    {
        console.log ("Player 2 win the game");
    }
    else{
        console.log("Both player ties")
    }



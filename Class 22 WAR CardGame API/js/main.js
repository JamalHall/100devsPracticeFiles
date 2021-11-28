
document.querySelector('#newDeckButton').addEventListener('click', getFetch)
document.querySelector('#drawCard').addEventListener('click', getFetch2)

// New Deck   try rewriting using async await syntax
let deckId = ''

function getFetch(){
  const choice = document.querySelector('#decksNum').value
  const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${choice}` 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        deckId = data.deck_id
        resetDom()
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


// Reset DOM
function resetDom(){
  document.querySelector('#player1').src="img/newcards.jfif"
  document.querySelector('#player2').src="img/newcards.jfif"
  document.querySelector('#winner').innerText = 'new'

}

// cards value object
let val1 = ''
let val2 = ''
const values = {
  ace: 15,
  king: 14,
  queen: 13,
  jack: 12,
  10: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2,
  1: 1,
 }


// Draw Cards
function getFetch2(){
  const choice = document.querySelector('#drawNumber').value
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${choice}` 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1').src=data.cards[0].image
        document.querySelector('#player2').src=data.cards[1].image
        val1 = data.cards[0].value
        val2 = data.cards[1].value
        console.log(val1)
        console.log(val2)

        cardValue(val1,val2)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
                 
}

 //card value
function cardValue(p1,p2){
  
  val1=p1.toLowerCase()
  val2=p2.toLowerCase()
 
  val1=values[val1]
  val2=values[val2]

   console.log(val1,' card p1 as int', typeof(val1))
   console.log(val2,' card p2 as int', typeof(val1))
   cardGame()
   }
   


// Card Game
function cardGame(){
if(val1>val2){
  document.querySelector('#winner').innerText = 'Player 1 wins'
} else if (val2>val1){
  document.querySelector('#winner').innerText = 'Player 2 wins'
} else {
  document.querySelector('#winner').innerText = ' WAR '
}
}
// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = '   ginger ale    '
favDrink=favDrink.trim()
console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let stringBunch = 'apple grape orange'
 // console.log (stringBunch.search('apple')!==-1) //condensed way to test true -1 is not there 1 is there

  if(stringBunch.search('apple') !== -1) {
        console.log('yes')
  } else{
      console.log('no')
  }
  

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function run(num){
    for(let i=0; i<num; i++){
        game()
    }
}
run(5)

function game() {
    let dice=Math.random()*100     
    if(dice<=33) {
        console.log('rock') 
        return 'rock'
    } else if(dice<=66){
        console.log('paper') 
        return 'paper'
    } else {
        console.log('sissors') 
    return 'sissors'
}
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function game2(){
     
    let human = prompt('rock paper or sissors game 2')  || game(1)  // experimenting with input types if a value is not passed in the prompt is used
    let bot = game(1)
    console.log('Human:',human,'Bot:',bot)
    if( human === bot){
        console.log ('tie')
    } else if(human==='rock' && bot ==='sissors' ){
        console.log('winner')
    } else if(human==='paper' && bot==='rock'){
        console.log('winner')
    } else if(human==='sissors' && bot==='paper'){
        console.log('winner')
    } else {
        console.log('you lost try again')
    }
}
game2()


function game3(choice){
     
    let human = prompt('rock paper or sissors game 3')  || choice  // experimenting with input types if a value is not passed in the prompt is used
    let bot = game(1)
    console.log('Human:',human,'Bot:',bot)
    if( human === bot){
        console.log ('tie')
    } else if(human==='rock' && bot ==='sissors' ){
        console.log('winner')
    } else if(human==='paper' && bot==='rock'){
        console.log('winner')
    } else if(human==='sissors' && bot==='paper'){
        console.log('winner')
    } else {
        console.log('you lost try again')
    }
}
 

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

// I just worte backwards to see if it would work function name is set as variable with let better way for readability function playGames(arr) 
let playGames = function(arr){
    arr.forEach((e,i) => {game3(e)})
}
playGames(['rock', 'paper','paper','rock','sissors'])
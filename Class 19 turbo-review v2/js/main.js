// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let isQuestion = 'This is a sentence right?'
isQuestion.slice(isQuestion.length-1) ==='?' ? alert('This is a Question'): alert('This is not a Question')

let string = 'Is this the best week ever?'
alert(string.endsWith('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multiWord = 'I am looking for jr dev positions. I am a jr dev'
console.log(multiWord.replaceAll('jr dev', 'software engineer'))


function changeWord(string){
    let delWord = 'jr dev'
    if (string.includes(delWord)) {
        multiWord = multiWord.replaceAll(delWord,'software engineer')
        console.log(multiWord)
        return multiWord
    }
}
changeWord(multiWord)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function loop(i){
    while (i>0) {
    i--
    rpsGame()
    }
}
loop(3)

function rpsGame(){
    let random = Math.round(Math.random()*100)
    console.log(random)
    let bot
       
        if(random<33){
            //console.log('rock')
            bot = 'rock'
        } else if(random<66) {
            //console.log('paper')  
            bot ='paper'
        } else {
            //console.log('sissors')  
            bot = 'sissors'
        }
    console.log(bot)
    return bot
} 
  
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

let human = prompt('rock paper or sissors').toLowerCase()
checkWin(human)
function checkWin(value){
let bot = rpsGame()
if(value==='rock' && bot==='sissors' || value==='paper' && bot==='rock' || value==='sissors' && bot==='paper') {
    console.log('you win')
    } else if (value===bot) {
        console.log('you tied')
    } else {
        console.log('you lost')
    }
}
 
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let arrValue = ['paper', 'rock', 'rock', 'sissors']
function runArray(){
    arrValue.forEach((e,i) => checkWin(e))
}
runArray()
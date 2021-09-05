// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let sentVar = 'I am learning so much so fast!' 
console.log(sentVar.repeat(12))
 
//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
let wordArray = ['I', 'am', 'number', '1']
console.log(wordArray.join(' '))

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function spock(){
    let multiplier=Math.round(Math.random()*100)
        console.log(multiplier)
    if (multiplier<20){
        return 'rock'
    } else if(multiplier<40){
        return 'paper'
        } else if(multiplier<60){
            return 'sissors'
        } else if(multiplier<80){
            return 'lizard'
        } else {
            return 'spock'
        }
        }
       
console.log(spock())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function shallWePlayAGame(human){
    human=human.toLowerCase()
    console.log(human)
    let bot=spock()
    console.log(bot)
        if( human==='rock' && (bot==='sissors' || bot==='lizard') ||
            human==='paper' && (bot==='rock' || bot==='spock') ||
            human==='sissors' && (bot ==='paper' || bot==='lizard') ||
            human==='lizard' && (bot==='spock' || bot==='paper') || 
            human==='spock' && (bot==='sissors' || bot==='rock')) {
            return console.log('WINNA')
        } else if(human===bot){
            return 'tie'
        } else {
            return console.log('Loosa')
        }
        }
        shallWePlayAGame(prompt('ROCK PAPER SISSORS LIZARD SPOCK','spock'))
        
       
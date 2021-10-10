//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrNum = [1,2,4,5,8,5,10]
 
let total=0 // making a for loop
for(i of arrNum){
    total = i+total
    }
console.log(total)

let reduceFunction = arrNum.reduce((acc,cv)=>{return acc+cv},10) //using reduce the 10 is the number I am telling the acc to begin count so the final result is  35+10=45
 console.log(reduceFunction)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function numSq(arr){
    let squared = arr.map((e,i) => {
        let math = e*e
        return math})
    console.log(squared)
}
numSq([1,2,5,6])

 
//Create a function that takes string
//Print the reverse of that string to the console

function revStr(word){
    let strArr = word.split('')
    let reversed = strArr.reverse()
    let joined = reversed.join('')
    console.log(joined)
    return joined
}
revStr('hello')


//Create a function that takes in a string
//Alert if the string is a palindrome or not
function bobPal(palStr){
    let palStr2 = revStr(palStr)
    if(palStr===palStr2) {
        alert(`${palStr} is apalindrome`)
    } else { 
        alert(`${palStr} is not a palindrome`)
    }
    }

bobPal(prompt('enter word') || "No word entered")
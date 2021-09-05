//Arrays
//Create and array of numbers. Sum all of the numbers. Alert the sum.
let array1=[1,2,3,4,5]
let arr=array1.reduce((acc,cv)=> {return (acc+cv)},0)
console.log(arr)
 

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let arr2=array1.map((e,i) => e*e)
console.table(arr2)


//Create a function that takes string
//Print the reverse of that string to the console

// let str='i racecar I'
// let revStr = str.split('')
// revStr = revStr.reverse()
// revStr = revStr.join('')
// console.log(revStr)


let str='i racecar I'
let revStr = str.split('').reverse().join('')
console.log(revStr)

//Create a function that takes in a string
//Alert if the string is a palindrome or not

str.toLowerCase()===revStr.toLowerCase() ? alert('palindrome using toLowerCase()'):alert('not palindrome')
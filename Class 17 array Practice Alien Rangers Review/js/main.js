//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvArray = ['family matters', 'fresh prince', 'stargate',]

// for each version
tvArray.forEach((element,index) => { //good practice declare index in paremeters just incase you want to use later since more than 1 paremeter must be in ()
    console.log(element,index) // did not have to use index on the console.log but I wanted to see it
  })

// for of version
for ( i of tvArray) {
    console.log(i)
        i++
}

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let arrayOfNum = [1,2,3,4,5,6,7,8,9,10,]
let newArray = []

// push to new array
arrayOfNum.forEach((element,index) => {
    if(element%2===0) {
    newArray.push(element)
}})
console.table(newArray)

// array filter
function evens(numArray){
    return numArray.filter((element,index)=>element%2===0)
}
console.log(evens(arrayOfNum))


//map to new array
let mapArray = arrayOfNum.map((element,index) => arrayOfNum[element])
console.table(mapArray)

arrayOfNum.map(mapArray=>console.log(mapArray))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
let arrayOfNum2 = [1,2,3,4,5,6,7,8,9,10,]

 function sumHighOrLow(arrayOfNum2){
     let max = Math.max(...arrayOfNum2)
     let min = Math.min(...arrayOfNum2)
     alert(max+min)
     console.log(max+min)
 }
 sumHighOrLow(arrayOfNum2)

 //using sort
 function secondLowAndHigh(arr){
     let sorted = arr.sort((a,b)=>a-b)
     console.log(sorted[1] + sorted[sorted.length-2])
 }
 secondLowAndHigh([2,4,3,5,1])
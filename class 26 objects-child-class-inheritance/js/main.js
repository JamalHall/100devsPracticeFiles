//Create an a class and extend it - Can be anything you would like it to be! 

class Automobile{
    constructor(name,wheels,type){
        this.name = name
        this.wheels = wheels
        this.type = type
    }
    start(){
        console.log(`the ${this.name} has started`)
    }
}
class Car extends Automobile{
    constructor(name,wheels, speed, year){
    super(name,wheels)
    this.speed = speed
    this.year = year
}
start(){
    console.log(`the ${this.name} does not need roads this is a Time Machine `)
}
}
let mcFly = new Car('Delorean',4,88,1885)


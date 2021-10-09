//Create a mouse object that has four properties and three methods
let mouse = {
    size:  'small',
    color: 'brown',
    food:  'cheese',
    tail:  true,
    name:  function(){console.log(`little ${mouse.color} mouse`)},
    bait:  function(){alert(`put some ${mouse.food} in the trap`)}

}

//using object literal {} brackets look at the difference from the above
let pcMouse = {}
pcMouse.brand = "logitech"
pcMouse.buttons = 3
pcMouse.model = "MX Master 2s"
pcMouse.color = "Black"

pcMouse.leftClick = function(){
    console.log("click left")
}
pcMouse.rightClick = function(){
    console.log("click right")
}
pcMouse.scrollWheel = function(){
    console.log("Scroll Up")
}
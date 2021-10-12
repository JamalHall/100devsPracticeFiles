//Create a Tony Hawk Pro Skater constructor that makes skater game characters with 4 properties and 3 methods
// i do not know this game so i will do street fighter
function MakeFighter(height,weapon,origin,sex){
    this.height = height
    this.weapon = weapon
    this.origin = origin
    this.sex = sex
    this.special = function() { alert('hayaookit')}
    this.taunt = function() { alert('get some')}
    this.fight = function() { alert('boom boom pow')}
}

let OmajiBreaker = new MakeFighter('tall', 'hammer', 'Tobago','male')

//  using class for syntactical sugar :)

class MakeFighter2{   //class keyword
    constructor(height,weapon,origin,sex){ // constructor is separate
    this.height = height
    this.weapon = weapon
    this.origin = origin
    this.sex = sex
    }
    special() { alert('whoohaaa')} // methods are on the end
    taunt() { alert('its on')}
    fight() { alert('20 hit combo pow')}
}

let suriBlack = new MakeFighter2('tall', 'smarts', 'Wakanda','female')
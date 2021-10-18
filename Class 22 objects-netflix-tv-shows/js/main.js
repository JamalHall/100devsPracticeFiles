//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class Netflix{
    constructor(genre, rating, star, runtime){
        this.genre=genre
        this.rating=rating
        this.star=star
        this.runtime=runtime
    }
        lights() {
        alert('dim the lights')
        }
        camera() {
        alert('que it up')
        }
        action() {
        alert('start the show')
        }
}
    let notTomorrow= new Netflix('action', 'R', 'Denzel Washington', 120)





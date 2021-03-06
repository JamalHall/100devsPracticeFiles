//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click',getDrink)

function getDrink(){
    let drinkChoice = document.querySelector('input').value
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drinkChoice

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            domUpdate(data)
        })
            .catch(err => {
            console.log(`error ${err}`)
    });

}

function domUpdate(data){
    document.querySelector('h2').innerText = data.drinks[0].strDrink 
    document.querySelector('h3').innerText = data.drinks[0].strInstructions
    document.querySelector('img').src = data.drinks[0].strDrinkThumb
}
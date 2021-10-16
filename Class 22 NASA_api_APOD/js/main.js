//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=aDcJLEujbcvqZfUcm0Y3L4RzCQn82pEXGXbwURyn&date=${choice}` 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        } else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        } else alert('Media Not controlled for please add support')
        document.querySelector('h2').innerHTML = `<h2> ${data.date} </h2>`
        document.querySelector('h3').innerHTML = `<p><em>${data.explanation}</em></p>`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


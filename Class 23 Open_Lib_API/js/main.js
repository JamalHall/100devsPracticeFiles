 document.querySelector('button').addEventListener('click', getFetch)
let response

if(localStorage.getItem('isbn')){
document.querySelector('input').value = localStorage.getItem('isbn')
document.querySelector('h3').innerText = `Previous Book ${localStorage.getItem('title')}`
localStorage.clear()
} 


function getFetch(){
  const choice = Number(document.querySelector('input').value)
 
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${choice}&jscmd=data&format=json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data[`ISBN:${choice}`].publishers[0])
        response = data

        document.querySelector('img').src = data[`ISBN:${choice}`].cover.large              
        document.querySelector('h2').innerText = data[`ISBN:${choice}`]['title']
        document.querySelector('h3').innerText = `subject: ${data[`ISBN:${choice}`]['subjects'][0]['name']}`
        document.querySelector('a').href = data[`ISBN:${choice}`]['url']
         

        localStorage.setItem('isbn', choice)
        localStorage.setItem('title', data[`ISBN:${choice}`]['title'])
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

const url = `https://www.dnd5eapi.co/api/spells/`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
            data.results.forEach(obj => console.log(obj.index))
            data.results.forEach(obj => {
                const li = document.createElement('li')
                li.textContent = obj.index
                document.querySelector('h6').appendChild(li)
            })
          
        })
      .catch(err => {
          console.log(`error ${err}`)
      });


function getFetch(){
    
  let input = document.querySelector('input').value
  choice = input.replace(/ /g, '-')  // replaces all  ( )  empty spaces in regex pattern slashes with g flag with a '- '

  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)

        nodeAppend(data.classes,1)
        nodeAppend(data.subclasses,2)

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
 
function nodeAppend(data,tag){
    
    if(tag === 1){
        data.forEach(obj => {
        const li = document.createElement('li')
        li.textContent = obj.name
        document.querySelector('h3').appendChild(li)
    })
} else if(tag === 2){
            data.forEach(obj => {
        const li = document.createElement('li')
        li.textContent = obj.name
        document.querySelector('h4').appendChild(li)
    })
    
    }
    
}

//Create a button that adds 1 to a botScore stored in localStorage 

if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore',0)
}


document.getElementById('reset').addEventListener('click',reset)
document.getElementById('score').addEventListener('click', add1)

function reset(){
    localStorage.setItem('botScore',0)
    document.getElementById('display').innerText = localStorage.getItem('botScore') 
}

function add1(){
    let score = Number(localStorage.getItem('botScore'))
    score+=1
    localStorage.setItem('botScore',score)
    document.getElementById('display').innerText = localStorage.getItem('botScore')
}



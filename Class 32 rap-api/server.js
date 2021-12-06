const express = require('express') // must put in quotes or it will look for a variable called express
const app = express()  // puts all functions that are in express in a variable called app
const PORT = 8000 // port set as a variable to enhance readability

app.get('/',(req,res)=> {  // the forward slash is the home page 
    res.sendFile(__dirname + '/index.html')  // __dirname is the look in current folder of server file shortcut
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`) // the console log is to have feedback that server is running
})
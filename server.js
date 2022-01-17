const express = require('express')
const app = express()
const port = 8080     

const pinoyJokes = require('./jokes/jokes.json')  

const {getJokesByCount , getJokesByDialect , getRandomJoke} = require('./helper')

app.get('/', (req, res) => {  
  res.sendFile('./public/index.html', { root: __dirname });
})     

app.get('/random' , (req , res ) => {   

  return res.send(getRandomJoke(pinoyJokes)) 

})    

app.get('/joke' , (req , res ) => {   

  return res.send(getRandomJoke(pinoyJokes)) 

})   

app.get('/random/:count' , (req , res ) => {     

  if(req.params.count > 10 || req.params.count <= 0 ) { 
    return res.send('count must be > than 10 and not < 0 ') 
  }

  return res.send(getJokesByCount(pinoyJokes , req.params.count)) 

})   

app.get('/joke/:dialect' , (req , res ) => {       

  const jokes = getJokesByDialect(pinoyJokes , req.params.dialect)     

  return res.send(getRandomJoke(jokes)) 

}) 

app.get('/joke/:dialect?/:count?' , (req , res ) => {         

  const { dialect , count } = req.params   
  
  if (count > 10 || count <= 0  ) {   
    return res.send('count must not be greater than 10 :) ')
  }

  let jokes = getJokesByDialect(pinoyJokes , dialect)   

  return res.send(getJokesByCount(jokes , count )) 

})  

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`)
})


const getRandomJoke = (jokes) => {     
  return jokes[Math.floor(Math.random() * jokes.length)] 

}

const getJokesByCount = (jokes , count) => {   

    randomIndices = new Set();      

    while (randomIndices.size != count  ) {   
        randomIndex = Math.floor(Math.random() * jokes.length) 
        randomIndices.add(randomIndex)  
    }       

    return Array.from(randomIndices).map((index) => { 
      return jokes[index] 
    }) 
}  

const getJokesByDialect = (jokes , dialect) => {  
    const dialectJokes = jokes.filter((joke) => { 
        return joke.dialect == dialect
    })      


    return dialectJokes 
}
  

module.exports = {getJokesByCount , getJokesByDialect , getRandomJoke};  

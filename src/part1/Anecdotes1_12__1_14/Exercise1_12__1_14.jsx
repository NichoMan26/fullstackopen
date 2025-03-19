import { useState } from "react"


const anecdotesArr = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]
const chooseNumberOfAnecdote = () =>  Math.floor(Math.random() * anecdotesArr.length) // get random number 

let anecdotesArrWithObj = anecdotesArr.map((anecdote, index) => { //create array of objects
  return {id: index, text: anecdote, votes: 0}
})

const anecdotesObj = { // create object with all data
  currentsAnecdote: {...anecdotesArrWithObj[chooseNumberOfAnecdote()]},
  favoritesAnecdote: {id: 0, text: 'No champ yet', votes: 0},
  anecdotes: anecdotesArrWithObj
  
}

const Button = ({text,clickFunc}) => {
  return (
    <button onClick={clickFunc}>{text}</button>
  )
}

const Exercise1_12__1_14 = () => {
  
  const [anecdotesState, setAnecdotesState] = useState({...anecdotesObj})
  
  const clickNextBTN = () => { // change anecdote when click next button
    let newAnecdote = anecdotesState.anecdotes[chooseNumberOfAnecdote()] // get random anecdote
    setAnecdotesState({...anecdotesState, currentsAnecdote: newAnecdote}) //  set new current anecdote
  }
  
  
  const voteByAnecdote = () => { //change votes when click vote button
    let votedAnecdote = {...anecdotesState.currentsAnecdote, votes: anecdotesState.currentsAnecdote.votes + 1}  // add vote
    let newAnecdotes = anecdotesState.anecdotes.map(anecdote => anecdote.id === anecdotesState.currentsAnecdote.id ? votedAnecdote : anecdote) // change votes in array
    let favoritesAnecdote = newAnecdotes.reduce((prev, current) => prev.votes > current.votes ? prev : current) // get favorite anecdote

    setAnecdotesState({...anecdotesState, anecdotes:newAnecdotes, currentsAnecdote: votedAnecdote, favoritesAnecdote}) // set new votes and favorite anecdote
  }

  return (
    <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
      <h2>Anecdote of the day</h2>
     <p>{anecdotesState.currentsAnecdote.text}</p>
     <Button text='Next anecdote' clickFunc={clickNextBTN}/>
     <Button text='Vote' clickFunc={voteByAnecdote}/>
     <h2>Anecdote with most votes</h2>
     <p> {anecdotesState.favoritesAnecdote.text}</p>
     <p>has {anecdotesState.favoritesAnecdote.votes} votes</p>
    </div>
  )
}
export default Exercise1_12__1_14
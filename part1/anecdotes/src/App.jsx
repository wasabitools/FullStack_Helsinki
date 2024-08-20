import { useState } from 'react'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Header } from '../components/Header'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const handleSelected = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    console.log(anecdotes[randomAnecdote])
    return setSelected(randomAnecdote)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVote(newVotes)

    const maxVotes = Math.max(...newVotes)
    const mostVoted = newVotes.indexOf(maxVotes)
    setMostVoted(mostVoted)
  }


  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <Text text={anecdotes[selected]} />
      <Text text={`has ${votes[selected]} votes.`} />
      <Button handleClick={handleSelected} text={"Next anecdote"} />
      <Button handleClick={handleVote} text={"Vote"} />
      <Header text={"Anecdote with the most votes"} />
      <Text text={anecdotes[mostVoted]} />
      <Text text={`has ${votes[mostVoted]} votes.`} />
    </div>
  )
}

export default App
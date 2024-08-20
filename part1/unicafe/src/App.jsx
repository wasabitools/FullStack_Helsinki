import { useState } from 'react'
import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { Statistics } from '../components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    console.log("good was clicked")
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    console.log("neutral was clicked")
  }

  const handleBad = () => {
    setBad(bad + 1)
    console.log("bad was clicked")
  }

  return (
    <div>
      <Header title={"Give feedback"}/>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <Header title={"Statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
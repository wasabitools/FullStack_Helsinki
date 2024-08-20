import { useState } from "react"
import { Content } from "../components/Content"
import { Header } from "../components/Header"
import { Total } from "../components/Total"


const History = (props) => {
  if (!Array.isArray(props.allClicks) || props.allClicks.length === 0) {
    return <div>
      the app is used by pressing the buttons
    </div>
  }
  return <div>
    button press history: {props.allClicks.join(' ')}
  </div>
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    console.log('left before', left)
    setLeft(left + 1)
    console.log('left after', left)
    setTotal(left + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  const handleResetClick = () => {
    setLeft(0)
    setRight(0)
    setAll(0)
    setTotal(0)
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map(el => el.exercises)} />
      Number of times clicked: {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      Number of times clicked: {right}
      <p>total {total}</p>
      <Button handleClick={handleResetClick} text='reset' />
      <History allClicks={allClicks} />
    </div>
  )
}

export default App

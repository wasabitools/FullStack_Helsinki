import './App.css'
import { Header } from './components/Header'
import { Total } from './components/Total'
import { Content } from './components/Content'

const App = ({course, parts}) => {
  return (
    <div>
      <Header course={course} />
      <Content key= {parts.id} parts={parts} />
      <Total  parts={parts}/>
    </div>
  )
}

export default App
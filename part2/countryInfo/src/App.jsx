import { useState } from 'react'
import { Filter } from './components/Filter'
import { Section } from './components/Section'
import './App.css'

function App() {
  return (
    <>
      <Section title="Country Info" />
      <Filter />
      {/* <Footer /> */}
    </>
  )
}

export default App

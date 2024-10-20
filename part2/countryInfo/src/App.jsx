import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { Section } from './components/Section'
import './App.css'
import countryInfo from './service/countryInfo'

function App() {
  const [country, setCountry] = useState(null)
  const [countryData, setCountryData] = useState(null)

  useEffect(() => {
    console.log("hooking a country", country)
    countryInfo
      .getCountry(country)
      .then(response => {
        setCountryData(response.name.common)
      })
      .catch(error => {
        console.log("Error fetching country", error)
      }), [country]
  })

  return (
    <>
      <Section title="Country Info" />
      <Filter setCountry={setCountry} />
      {countryData && <p>Country Name: {countryData}</p>}
    </>
  )
}

export default App

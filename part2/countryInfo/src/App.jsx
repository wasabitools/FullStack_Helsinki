import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { Section } from './components/Section'
import { Country } from './components/Country'
import { Info } from './components/Info'
import countryInfo from './service/countryInfo'
// import './App.css'

function App() {
  const [countries, setCountries] = useState([])
  const [searchedCountries, setSearchedCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countryInfo
      .getAll()
      .then(response => {
        setCountries(response)
      })
  }, [])

  return (
    <>
      <Section title="Country Info" />
      <Filter countries={countries} setSearchedCountries={setSearchedCountries} />
      {!selectedCountry ? (
        <Country countries={searchedCountries} onSearchedCountries={setSelectedCountry} />) : (
        <Info country={selectedCountry} />
      )}
    </>
  )
}

export default App

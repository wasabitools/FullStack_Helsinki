import { useState, useEffect } from 'react'
import exchangeRateService from './services/exchangeRate'
import { Form } from './components/Form'

const App = () => {
  const [rates, setRates] = useState({})
  const [currency, setCurrency] = useState(null)


  const hook = () => {
    console.log('effect run, currency is now', currency)

    if (currency) {
      console.log('fetching exchange rates...')
      exchangeRateService
        .getCurrency(currency)
        .then(response => {
          setRates(response.rates)
        })
    }

  }
  useEffect(() => hook(), [currency])

  return (
    <div>
      <Form setCurrency={setCurrency} rates={rates} />
      <pre>
        {JSON.stringify(rates, null, 2)}
      </pre>
    </div>
  )
}

export default App
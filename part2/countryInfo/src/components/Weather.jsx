import { useEffect, useState } from "react"
import weatherService from '../service/weather'

export const Weather = ({ capital }) => {
    const [weather, setWeather] = useState(null)
    const [current, setCurrent] = useState({})

    useEffect(() => {
        weatherService
            .fetchWeather(capital)
            .then(response => {
                setWeather(response.weather)
                setCurrent(response.current)
            })
    }, [capital])

    if (!weather) return <p>Loading weather data...</p>

    return (
        <>
            <h3>Weather in {capital} </h3>
            <h6>{weather[0].description}</h6>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" />
            <p>Temperature: {current.main.temp} °C</p>
            <p>Humidity: {current.main.humidity} °C</p>
            <p>Wind: {current.wind.speed} m/s</p>
            <p>Sunrise: {new Date(current.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(current.sys.sunset * 1000).toLocaleTimeString()}</p>

        </>
    )
}
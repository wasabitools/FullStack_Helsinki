import { useEffect, useState } from "react"
import weatherService from '../service/weather'

export const Weather = ({ capital, lat, lon }) => {
    const [weather, setWeather] = useState(null)
    const [current, setCurrent] = useState({})

    useEffect(() => {
        weatherService
            .fetchWeather(lat, lon)
            .then(response => {
                setWeather(response.weather)
                setCurrent(response.current)
            })
    }, [lat, lon])

    if (!weather) return <p>Loading weather data...</p>

    return (
        <>
            <h3>Weather in {capital} </h3>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" />
            <p>Temperature: {Math.round(current.temp - 273.15)} °C</p> {/*convert it to C*/}
            <p>Feels like: {Math.round(current.feels_like - 273.15)} °C</p> {/*convert it to C*/}
            <p>Wind: {current.wind_speed} m/s</p>
            <p>Sunrise: {new Date(current.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(current.sunset * 1000).toLocaleTimeString()}</p>

        </>
    )
}
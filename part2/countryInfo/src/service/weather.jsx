import axios from 'axios'

const baseUrl = "https://api.openweathermap.org/data/3.0/onecall"


const fetchWeather = async () => {
    try {
        const request = await axios.get(`${baseUrl}`, {
            params: {
                lat: lat,
                lon: lon,
                appid: "KEY"
            }
        })
        return request.then(response => response.data)
    } catch (error) {
        console.error("FETCH weather Error:", error)
        throw error
    }
}

export default { fetchWeather }
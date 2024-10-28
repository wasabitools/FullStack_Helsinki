import axios from 'axios'

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=London"


const fetchWeather = async () => {
    try {
        const request = await axios.get(`${baseUrl}`, {
            params: {
                q: capital,
                units:"metric",
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
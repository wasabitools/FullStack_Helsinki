import axios from 'axios'

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api"


const getAll = async () => {
    try {
        const request = await axios.get(`${baseUrl}/all`)
        return request.then(response => response.data)
    } catch (error) {
        console.error("GET All: Error:", error)
        throw error
    }
}

export default { getAll }
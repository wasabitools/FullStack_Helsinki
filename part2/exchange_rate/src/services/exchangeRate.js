import axios from 'axios'

const baseUrl = 'https://open.er-api.com/v6/latest/'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getCurrency = (currency) => {
    const request = axios.get(`${baseUrl}${currency}`)
    return request.then(response => response.data)
}

export default { getAll, getCurrency }
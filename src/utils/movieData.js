import configServices from './config.js'


const url = `${configServices.apiUrl}movie/popular?api_key=${configServices.apiKey}&language=en-US&page=1`

const apiData = () => fetch(url)

export default apiData;
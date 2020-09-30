const axios = require('axios')

const getClima = async(lat, lon) => {

    const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
            lat,
            lon,
            units: 'metric',
            appid: '5ac21fa65bf6c03ecac23fa4b5cdcb2d'
        }
    })

    const response = await instance.get();
    const data = response.data;

    const lugar = data.name;
    const temp = data.main.temp;

    return {
        lugar,
        temp
    }
}

module.exports = {
    getClima
}
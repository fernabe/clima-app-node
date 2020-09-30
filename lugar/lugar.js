const axios = require('axios')

const getLatLon = async(direccion) => {
    const encodedUri = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUri}.json`,
        params: { 'access_token': 'pk.eyJ1IjoiZmVybmFiZSIsImEiOiJja2ZwaWc1dWgwYmZzMndyNWd4bjJ6M2F5In0.LlQ8n_K2znzUmHAXiCNHdA' }
    })

    const response = await instance.get();

    if (response.data.features.length === 0) {
        throw new Error(`No hay ningun resultado para ${direccion}`);
    }

    const data = response.data.features[0];
    const nombre_completo = data.place_name
    const lugar = data.text;
    const latitud = data.center[1];
    const longitud = data.center[0]

    return {
        nombre_completo,
        lugar,
        latitud,
        longitud
    }
}

module.exports = {
    getLatLon
}
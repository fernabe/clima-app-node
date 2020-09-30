const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLatLon(direccion);
        const temp = await clima.getClima(coordenadas.latitud, coordenadas.longitud);
        return `La temperatura actual en ${coordenadas.nombre_completo} es de ${temp.temp} grados`
    } catch (err) {
        return `No se pudo determinar la temperatura de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(response => console.log(response))
    .catch(err => console.log(err));
// - GET /countries/{idPais}__:
//   - Obtener el detalle de un país en particular
//   - Debe traer solo los datos pedidos en la ruta de detalle de país
//   - Incluir los datos de las actividades turísticas correspondientes

const axios = require('axios');
//logica de las funciones que van a resolver cada ruta
let primerVez = false;

let turismo = [];
let paisturismo = [];



exports.countryDetail = async (req,res) => {

const { idPais } = req.params;
//Reemplar esto por la consulta a la base de datos
    
    const { data } = await axios('https://restcountries.com/v3/all')
    // if(data.length){
        console.log(data.length)
        const paises = data.map((pais) => {
            return {
                code: pais.ccn3,
                name: pais.name.common,
                continent: pais.region,
                capital: pais.capital ? pais.capital[0] : 'Capital no encontrada',
                subregion: pais.subregion,
                area: pais.area,
                population: pais.population,
                bandera: pais.flag,
            };
        });
    console.log(paises.code, idPais)
    const countryDetail = paises.find((pais) => pais.code === idPais)
    console.log(countryDetail,'countryDetail')


return res.status(200).send(countryDetail)
};
const axios = require('axios');
//logica de las funciones que van a resolver cada ruta
let primerVez = false;
let paises = [];
let turismo = [];
let paisturismo = [];



exports.listCountries = async (req,res) => {
// if (!primerVez){
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
    // }
    
    console.log(paises,'paises',paises.length)
    
    primerVez=true
// }

return res.status(200).send(paises)
};
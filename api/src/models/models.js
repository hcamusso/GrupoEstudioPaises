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
                id: pais.ccn3,
                capital: pais.capital ? pais.capital[0] : 'Capital no encontrada',
                subregion: pais.subregion,
                area: pais.area,
                poblacion: pais.population,
                bandera: pais.flag,
                nombre: pais.name.common,
                continente: pais.region
            };
        });
    // }
    
    console.log(paises,'paises',paises.length)
    
    primerVez=true
// }

return res.status(200).send(paises)
};
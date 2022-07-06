// - GET /countries/{idPais}__:
//   - Obtener el detalle de un país en particular
//   - Debe traer solo los datos pedidos en la ruta de detalle de país
//   - Incluir los datos de las actividades turísticas correspondientes

const axios = require('axios');
const { Country, Activity } = require('../db.js')
//logica de las funciones que van a resolver cada ruta

exports.countryDetail = async (req,res) => {

const { idPais } = req.params;

try{
    let pais = await Country.findByPk(idPais.toUpperCase(), {include: {model: Activity}})

    res.status(201).json(pais);
}
catch(err){
    if(!idPais){
        res.status(400).send({err: "¡No escribiste ningun nombre de país!"})
    }
    if(idPais !== Country.idCountry){
        res.status(400).send({err: `¡No existe ningun país con ese nombre! ${idPais}`})
    }
}


};
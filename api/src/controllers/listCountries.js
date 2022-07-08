// - GET /countries__:
//   - En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
//   - Obtener un listado de los paises.
const axios = require('axios');
const { Op } = require("sequelize");
const { countryDetail } = require('./countryDetail');
const { Country } = require('../db.js')
//logica de las funciones que van a resolver cada ruta

exports.listCountries = async (req,res) => {
    const { name } = req.query;
    console.log(name)
    try {
        if(name) {
            console.log('dentro ')
            let pais = await Country.findAll({
                order:[["idCountry"]],
                where: {
                  name: {
                    [Op.iLike]: `%${name}%`,
                  },
                },
                
              });
           
            return res.status(201).json(pais);
        }
        const paises = await Country.findAll({
          order:[["idCountry"]]
        });
       console.log('ruta listCountries')
       return res.status(200).json(paises)
    } catch (error) {
        res.status(400).send(error)
    }


};
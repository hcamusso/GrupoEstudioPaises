//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
//   - Crea una actividad turística en la base de datos

const axios = require('axios');
const { Country, Activity } = require('../db.js')
//logica de las funciones que van a resolver cada ruta
exports.activity = async (req,res) => {
    const { name, dificultad, duracion, temporada , countries} = req.body;
    try {
        const newActivity = await Activity.create({
            name, dificultad, duracion, temporada
        });
        //conecto con country atravez de la relacion n:n

        countries.map(async countryId => {
            const foundCountry = await Country.findAll({
              where: { idCountry: countryId },
            });
            if (foundCountry) newActivity.addCountries(foundCountry);
        });

        res.status(202).send("La actividad ha sido creada exitosamente");
    } catch (error) {
        res.status(400).send(error)
    }

};
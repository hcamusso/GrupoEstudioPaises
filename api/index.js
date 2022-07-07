const axios = require('axios');
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {//crea las tablas si no existen o no hace nada si ya existe. con force true elimina la tabla y la vuelve a crear, 
  //con alter true aplica los cambios necesarios a la tabla para que coincida con el modelo, no borra los datos!
  server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    try {//se llena la base de datos por primera vez o si no existe algun registro
      const { data } = await axios('https://restcountries.com/v3/all')
          // if(data.length){
              console.log(data.length)
              const paises = await data.map((pais) => {
                Country.findOrCreate({
                  where: {
                    idCountry: pais.cca3,
                    name: pais.name.common,
                    continent: pais.region,
                    capital: pais.capital ? pais.capital[0] : 'Capital no encontrada',
                    subregion: pais.subregion ? pais.subregion : 'Subregion no encontrada',
                    area: pais.area,
                    population: pais.population,
                    imagen: pais.flags[1],
                  },
                });
              });
              return ('Base de Datos Country con datos.')
    
    }catch (error) {
      console.log(error + 'en api/index.js ')
    }
  });
});

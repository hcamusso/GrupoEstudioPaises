// - GET /countries/{idPais}__:
//   - Obtener el detalle de un país en particular
//   - Debe traer solo los datos pedidos en la ruta de detalle de país
//   - Incluir los datos de las actividades turísticas correspondientes

const axios = require('axios');
//logica de las funciones que van a resolver cada ruta
let primerVez = false;

let turismo = [{
    idActivity: 1,
    name: "rafting",
    dificulty: 1,
    duration: 2,
    season: "verano"
    },
    {
        idActivity: 2,
        name: "sky",
        dificulty: 5,
        duration: 4,
        season: "invierno"  
    },
    {
        idActivity: 3,
        name: "avistaje de aves",
        dificulty: 1,
        duration: 3,
        season: "primavera"  
    },    {
        idActivity: 4,
        name: "treking",
        dificulty: 5,
        duration: 1,
        season: "otoño"  
    }
    ];
let paisturismo = [{
    "activity_idActivity" : 1,
    "country_idCountry": "250",
},
{
    "activity_idActivity" : 4,
    "country_idCountry": "250",
},
];



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
    
    const countryDetail = paises.find((pais) => pais.code === idPais);
    console.log(countryDetail,'countryDetail')
    console.log(paisturismo,'paisturismo')
    const idsActividades = paisturismo.filter((e) => e.country_idCountry === idPais);
    console.log(idsActividades,'idsActividades')
    // recorro todo el arreglo de idsActividades
    const detalleActividades =[];
    for (let index = 0; index < idsActividades.length; index++) {
        const element = idsActividades[index];
        console.log(element, 'element')
        detalleActividades.push(turismo.find((e) => e.idActivity === element.activity_idActivity))
    }
  

    console.log(detalleActividades,'detalleActividades')

    let countryDetailAct={...countryDetail, "activityDetail": detalleActividades}

    console.log(countryDetailAct,'countryDetailAct')
// Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
// [ ] Código de país de 3 letras (id)
// [ ] Capital
// [ ] Subregión
// [ ] Área (Mostrarla en km2 o millones de km2)
// [ ] Población
// [ ] Actividades turísticas con toda su información asociada

return res.status(200).send(countryDetailAct)
};
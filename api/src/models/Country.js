const { DataTypes } = require('sequelize');//para poder especificar el tipo de dato
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {//exporto una arrow function, recibe un parametro, que es una instacia de sequelize
  // defino el modelo
  sequelize.define('country', {//nombre de modelo el primerparametro, luego un objeto con las propiedades y tipos de datos, puede haber un tercer parametro
    idCountry:{
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    imagen:{ 
      type: DataTypes.TEXT, 
      validate: {isUrl: true}
    },
    continent:{
      type: DataTypes.STRING,
    },
    capital:{
      type: DataTypes.STRING,
    },
    subregion:{
      type: DataTypes.STRING,

    },
    area:{
      type: DataTypes.REAL,
    },
    population:{
      type: DataTypes.INTEGER,
    }
  });
};

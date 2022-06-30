import axios from 'axios';

//todos los paises
export function getApiTotal(payload) {
  return function (dispatch) {
    axios.get('/countries').then(res => {
      return dispatch({ type: 'GET_COUNTRIES', payload: res.data });
    });
  };
}
//paises por nombre
//postear actividad
//todas las actividades
//todas las actividades
//orden por alfabeto
//orden por poblacion
//orden por continente
//orden por actividades


  

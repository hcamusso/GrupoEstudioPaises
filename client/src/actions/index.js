import axios from 'axios'

export function getCountries(){
    return async function(dispatch){
        const {data}= await axios.get('http://localhost:3001/countries');
        return dispatch({ type:'GET_COUNTRIES', payload:data
        })
    }
}
//paises por nombre
//postear actividad
//todas las actividades
//todas las actividades
//orden por alfabeto
//orden por poblacion
//orden por continente
//orden por actividades

//HC

export function postActivity(payload){
    return async function(dispatch){
        const {data}= await axios.post('http://localhost:3001/activity',payload);
        console.log (data);
        return data;
        }
    }


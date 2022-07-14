import React, {useState, useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import {postActivity,getCountries} from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';

export default function Activity() {
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector((state) => state.countriesall)
    
    const [input, setInput] = useState({
        name: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        countries:[]
    })
//manejadores de los inputs
    function handleChange(evento) {
        setInput({
            ...input,
            [evento.target.name] : evento.target.value
        })
        console.log(input)
    }
//manejador del ckeckbox
    function handleCheck(evento){
        if(evento.target.checked){
            setInput({
                ...input,
                temporada: evento.target.value
            })
        }
    }
//manejador del select
    function handleSelect(evento){
        setInput({
            ...input,
            countries: [...input.countries,evento.target.value]
        })
        console.log('despache crear actividad>',input)
    }
//manejador del submit
    function handleSubmit(evento){
        evento.preventDefault();
        dispatch(postActivity(input))
        alert("Actividad creado!!!")
        setInput({
            name: "",
            dificultad: "",
            duracion: "",
            temporada: "",
            countries:[]
        })
        //redijirnos al home
        history.push('/home')
    }

    useEffect(()=> {
        dispatch(getCountries());
    },[]);

    return(
        <div>
            <Link to= '/home'><button>Volver</button></Link>
            <h1>Crea la actividad turistica</h1>
            <form onSubmit={(evento)=>handleSubmit(evento)}>
                <div>
                    <label>Actividad:</label>
                    <input
                    type= "text"
                    value= {input.name}
                    name= "name"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Dificultad:</label>
                    <input
                    type= "number"
                    value= {input.dificultad}
                    name= "dificultad"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Duracion:</label>
                    <input
                    type= "number"
                    value= {input.duracion}
                    name= "duracion"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Temporada:</label>
                    <label> <input type= "checkbox" value= "Verano" name= "Verano" onChange={(evento)=>handleCheck(evento)}/>Verano </label>
                    <label> <input type= "checkbox" value= "Otoño" name= "Otoño" onChange={(evento)=>handleCheck(evento)}/>Otoño </label>
                    <label> <input type= "checkbox" value= "Invierno" name= "Invierno" onChange={(evento)=>handleCheck(evento)}/>Invierno </label>
                    <label> <input type= "checkbox" value= "Primavera" name= "Primavera" onChange={(evento)=>handleCheck(evento)}/>Primavera </label>
                </div>
                
                <select onChange={(evento) => handleSelect(evento)}>
                    {countries.map((country) => (
                        <option value={country.idCountry}>{country.name}</option>
                    ))}
                </select>
                <ul><il>{input.countries.map(el => el + ", ")}</il></ul>
                <button type='submit'>Crear Actividad Turistica</button>
            </form>
        </div>
    )
}

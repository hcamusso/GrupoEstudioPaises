import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchBar(){

 const [country, setCountry] = useState
//  const dispatchAction = useDispatch

 function handleChange (e){
    e.preventDefault();
    setCountry(e.target.value);

 }

 function devolverCountry(e) {

    e.preventDefault();
    if (country.length >= 1) {
        // dispatchAction(actionCreator())*///Se ejecuta el evento indicando que si se le pasó un pais debe despachar la action creator y devolvernos el país
    }
    else {
        alert('Es requisito ingresar un country')
    }
 }

 
 function actualizarPaises(e){
    e.preventDefault();
    try{
    //   dispatchAction(actionCreator())
    }
    catch(err){
      throw new Error(err); //Indagar un poco el uso del try catch en este tipo de acciones
    }
  }

    return (
        
            <form>
                  <button type='submit' onSubmit={devolverCountry}>Buscar</button> {/*Desde este boton despacharemos la action de buscar el pais*/} 
                  <div>
                    <input type="text"
                           value={country}   
                           placeholder='País...'
                           onChange={handleChange} /> {/*Se pasa la el handle como fn pero se ejecuta en el constructor*/}
                  </div>
                  
                  
                    
                  <button type="submit" onClick={actualizarPaises}>Actualizar</button>
                  {/* //  Faltaría despachar accion desde button "Actualizar" */}
            </form>
     )
    
} 
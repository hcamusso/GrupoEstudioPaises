import React  from "react";

export default function Country(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <table>
                <tbody>
                    <tr><td>Code:</td><td>{props.code}</td></tr>
                    <tr><td>Continente:</td><td>{props.continente}</td></tr>
                    <tr><td>Capital:</td><td>{props.capital}</td></tr>
                    <tr><td>Subregión:</td><td>{props.region}</td></tr>
                    <tr><td>Área:</td><td>{props.area}</td></tr>
                    <tr><td>Población:</td><td>{props.poblacion}</td></tr>
                </tbody>
            </table>

            <div>
                <h3>Actividades y Turismo</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Duración</th>
                            <th>Temporada</th>
                            <th>Dificultad</th>
                        </tr>
                    </thead>
                </table>
            </div>
            
        </div>
        
    )
};
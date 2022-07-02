
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getActivities } from "../../../client/src/actions/index";
import { useDispatch } from 'react-redux';
import Activities from '../../../client/src/components/Activity.jsx';
import S from '../../../client/src/styles/Card.module.css'



export default function Countries({idCountry, name, bandera, continent, population}){
    return(
        <div className={S.containerCards}>
            <Link to={'/home/' + idCountry}>
                <div className={S.card} key={idCountry} >
                    <img className={S.cardImg} src={bandera} alt="bandera" />
                    <h2 className={S.cardNombre}>{name}</h2>
                    <h3 className={S.cardContinente}>Continente: {continent}</h3>
                    <h3 className={S.cardContinente}>Poblacion: {population}</h3>

                </div>
            </Link>
        </div>
    )
}
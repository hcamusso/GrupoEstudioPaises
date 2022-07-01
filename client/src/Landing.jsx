import react from "react";
import {Link} from "react-router-dom"
import { Routes } from "react-router-dom";  //Verificar el uso de Routes
//Importar lo necesario (Classes, componentes,etc)


export default function Landing() {  //Cuando se renderice en el Landing se va a mostrar "Henry Countries"
    return (                         // Y tambien un buton para ingresar a la pag
        
            <div>
                 <h1>Henry Countries</h1>
                                            {/* Agregar las classes para darle el tono a la app */}
                 <Link to={'/home'}>
                    <button>Enter the app</button>   
                 </Link>

            </div>
        
    )
}
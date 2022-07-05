import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCountries} from '../actions'
import {Link} from 'react-router-dom'
import Card from '../components/Card'

export default function Home(){
  const dispatch= useDispatch() //para ir despachando mis acciones 
    // esta hook es lo mismo que hacer mapdispatchToProps y traerme los prop es mas directo
  const allCountries= useSelector(state=>state.countriesall)// traeme todo lo que esta en el estado de countries y guardamenlo en allcountries
    // traerme del estado cuando se monte los Paises , es lo mismo que hacer componentDidMount 
  useEffect( () => {  dispatch(getCountries()); // es lo mismo que hacer mapDispatchToProps
    },[dispatch] );//mientras este un estado o dependencia, como no depende de nada se monta sin problema
    //para prevenite errores que me renderice la pagina si toco volver a cargar
  
  function handlerlClick(e){
    e.preventDefault();
    dispatch(getCountries());
      }
    //renderizamos 
      return(  
        <div> 
          {/* <Link to= '/countries'> Paises</Link> */}
          <h1>PAISES DEL MUNDO </h1>
       
          
          <button onclick={e=>{handlerlClick(e)}}>
              Volver a cargar 
          </button>
        <div>
          <select>
            <option value='asc'>Ascedente</option>
            <option value='desc'>Descedente</option>   
           </select>
           <select>
            <option value='Continent'>Continente</option>
            <option value='name'>Actividad Turistica</option> 
            <option value='name'>Alfabeticamente</option>
            <option value='Population'>Cantidad de Poblacion </option>
          </select>
          {
            allCountries?.map((e) => {

              return (
                <fragment>
                  <Link to={"/home/"+ e.idCountry }>
                    <Card name={e.name} bandera={e.bandera} continent={e.continent} key={e.idCountry}/>
                  </Link>
                </fragment>
            )
           })
             }
        </div>
        </div>
      )
    }
    

  function handleFilterOrder(e) {
    e.preventDefault();
    dispatch(ordenAsc(e.target.value));
    setCurrentPage(1);
    setOrden(`${e.target.value}`);
  }

  function handleFilterPoblacion(e) {
    e.preventDefault();
    dispatch(ordenPoblacion(e.target.value));
    setCurrentPage(1);
    setOrdenPorPoblacion(`${e.target.value}`);
  }

  function handleOrdenContinente(e) {
    e.preventDefault();
    dispatch(ordenContinente(e.target.value));
    setCurrentPage(1);
    setOrden(`${e.target.value}`);
  }

  function handleOrdenActivity(e) {
    e.preventDefault();
    dispatch(ordenActividades(e.target.value));
    setCurrentPage(1);
    setOrden(`${e.target.value}`);
  }

  return (
    <div className={S.containerHome}>
      <h1 className={S.tituloPrincipal}>Countries App</h1>

      <div className={S.navbar}>
        <div className={S.selectTwo}>
          <label htmlFor="">Orden alfabético</label>
          <select
            defaultValue="Orden Alfafebético"
            onChange={e => handleFilterOrder(e)}
            name=""
            id=""
          >
            <option>Orden</option>
            <option value="asc">Aa-Zz</option>
            <option value="desc">Zz-Aa</option>
          </select>
        </div>

        <div className={S.selectOne}>
          <label htmlFor="">Ordenar por continente:</label>
          <select
            defaultValue="Todos"
            onChange={e => handleOrdenContinente(e)}
            name=""
            id=""
            key="1"
          >
            <option disabled>Todos</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
            <option value="Europe">Europa</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antarctida</option>
          </select>
        </div>

        <div className={S.selectThree}>
          <label htmlFor="">Poblacion</label>
          <select
            defaultValue="Orden Alfafebético"
            onChange={e => handleFilterPoblacion(e)}
            name=""
            id=""
          >
            <option>Población</option>
            <option value="asc">Menor población</option>
            <option value="desc">Mayor población</option>
          </select>
        </div>

        <div className={S.selectFour}>
          <label htmlFor="">Actividades</label>
          <select
            onChange={e => {
              handleOrdenActivity(e);
            }}
          >
            <option value="Actividades">Actividades</option>
            {activities.map(e => {
              return (
                <option value={e.name} key={e.ID}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>

        <Buscador />

        <div className={S.crearConteiner}>
          <Link to={'/create'}>
            <button className={S.btnCrear}>Crear Actividad</button>
          </Link>
        </div>
      </div>

      <Paginacion
        curretPage={curretPage}
        countriesPorPagina={countriesPorPagina}
        allCountries={allCountries.length}
        paginado={paginado}
      />

      <div className={S.conteinerCards}>
        {currentCountries?.map(e => {
          return (
            <div key={e.idPais}>
              <Countries
                idPais={e.idPais}
                imagen={e.imagen}
                name={e.name}
                continente={e.continente}
                poblacion={e.poblacion}
              />
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
import { useContext, useState } from "react";
import { UseApiContext } from "../../context/ApiContext";

const ContenedorResultadosHome =()=>{
    let [position,setPosition]=useState(0)
    let dataApi = useContext(UseApiContext)
    const array=dataApi.dataApi.response
    const partidoSiguiente=()=>{
        if(dataApi.dataApi.response!==undefined && position+4<dataApi.dataApi.response.length)
            setPosition(position=position+1)
    }
    const partidoAntertior=()=>{
        if(position>0){
            setPosition(position=position-1)
        }
    }
    let newArray=[]
    if(array!==undefined){
        if(position+3===array.length){
            newArray=dataApi.dataApi.response.slice(position,array.length)
        }else if(array.length>=4){
            newArray=dataApi.dataApi.response.slice(position,position+4)
        }else if(array.length===3){
            newArray=dataApi.dataApi.response.slice(0,3)
        }
        else if(array.length===2){
            newArray=dataApi.dataApi.response.slice(0,2)
        }
        else if(array.length===1){
            newArray=dataApi.dataApi.response.slice(0,1)
        }
    }

    return(
        <div className="contenedor-resultados-home">
            <h2>La cancha se mueve con vos: <span className="texto-negro">fútbol en vivo donde sea que estés.</span></h2>
            <p>¡No te pierdas ningún pase! Seguí el minuto a minuto de tu equipo con una <br/> comunidad que entiende sobre pasión deportiva. </p>
            <div className="resultados-home">
                <div className="contenedor-btn-partido-anterior"><div onClick={partidoAntertior} className="btn-partido-anterior">{"<"}</div></div>
                <div className="resultados">
                {dataApi.dataApi.length===0?<div className="loading"><p>No hay partidos disponibles</p></div>:
                newArray.map((i,m)=>{
                    return(
                        <div className="partido" key={m}>
                                <div className="contenedor-logos">
                                    <div className="logos">
                                        <img src={i.teams.home.logo} alt={"logo"+i.teams.home.name}></img>
                                        <img src={i.teams.away.logo} alt={"logo"+i.teams.away.name}></img>
                                    </div>
                                </div>
                                <div className="teams">
                                    <div className="team"><p>{i.teams.home.name}</p></div>
                                    <p className="vs">vs</p>
                                    <div className="team"><p>{i.teams.away.name}</p></div>
                                </div>
                                <div className="goals">
                                    <p>{i.goals.home}</p>
                                    <p>-</p>
                                    <p>{i.goals.away}</p>
                                </div>
                                <div className="time">
                                    <p>{i.fixture.status.elapsed+"'"}</p>
                                </div>
                        </div>
                    )      
                })}
                </div>
                <div className="contenedor-btn-partido-siguiente"><div onClick={partidoSiguiente} className="btn-partido-siguiente">{">"}</div></div>
            </div>
        </div>
        
    )
}

export default ContenedorResultadosHome;
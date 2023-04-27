import { useContext, useState } from "react"
import { UseApiContext } from "../../context/ApiContext"
import { NoticiasDestacadas } from "./NoticiasDestacadas"


export const ContenedorNoticiasDestacadas=(props)=>{
    let [position,setPosition]=useState(0)
    const {noticias}=useContext(UseApiContext)
    const noticiasDestacadas=noticias.filter(i=>i.recomendado===true)   
    
    const partidoSiguiente=()=>{
        if(position+3<noticiasDestacadas.length){
            setPosition(position=position+1)
        }
    }

    const partidoAntertior=()=>{
        if(position>0){
            setPosition(position=position-1)
        }
    }

    return(
        <div className="contenedor-noticias-destacadas">
            <div className="contenedor-titulo-noticias-destacadas">
                <h3>Noticias destacadas</h3>
            </div>
            <p>Explorá las novedades más importantes de la semana junto a nuestro equipo de periodistas estrellas.</p>
            <div className="noticias">
                <div className="contenedor-btn-noticias"><div onClick={partidoAntertior} className="btn-noticias-anterior">{"<"}</div></div>
                <NoticiasDestacadas position={position} noticias={noticiasDestacadas} location={props.location}></NoticiasDestacadas>
                <div className="contenedor-btn-noticias"><div onClick={partidoSiguiente} className="btn-noticias-siguiente">{">"}</div></div>
            </div>
        </div>


    )
}
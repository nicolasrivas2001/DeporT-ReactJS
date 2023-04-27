import { useContext } from "react"
import { useParams } from "react-router-dom"
import { BotonTwitch } from "../components/BotonTwitch";
import { ContenedorNoticiasDestacadas } from "../components/Home/ContenedorNoticiasDestacadas";
import { UseApiContext } from "../context/ApiContext"

const capitalizarPrimeraLetra=(str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const InfoNoticia=()=>{
    const {idnoticia}=useParams()
    const {noticias,periodistas}=useContext(UseApiContext)
    const noticia=noticias.find(i=>i.id===idnoticia)
    const periodista=periodistas.find(i=>i.nombre===noticia.periodista)
    return(
        <div className="contenedor-noticia-completa">
            <div className="titulo">
                <h2>Todas las novedades del <br/> <span>DeporT en un solo lugar</span></h2>
            </div>
            <p className="ruta">Home {">"} {capitalizarPrimeraLetra(noticia.tipo)} {">"}<span> Noticias</span></p>
            <div className="periodista">
                <img src={periodista.foto} alt="Imagen periodista" />
                <div>
                    <p>{periodista.nombre}</p>
                    <p>{periodista.descripcion}</p>
                </div>
            </div>
            <div className="info-noticia">
                <h2>{noticia.titulo}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum doloremque officia quas placeat, esse ipsum aliquid numquam veritatis ut aliquam sint repellendus quae recusandae modi voluptatum! Voluptatem placeat praesentium architecto?</p>
                <img className="foto-noticia" src={noticia["foto-noticia"]} alt="foto banner"/>
                <div className="contenedor-boton-twitch">
                    <BotonTwitch text={"Ver transmisión"}></BotonTwitch>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum doloremque officia quas placeat, esse ipsum aliquid numquam veritatis ut aliquam sint repellendus quae recusandae modi voluptatum! Voluptatem placeat praesentium architecto?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum doloremque officia quas placeat, esse ipsum aliquid numquam veritatis ut aliquam sint repellendus quae recusandae modi voluptatum! Voluptatem placeat praesentium architecto?</p>
                <img className="foto-noticia" src={noticia["foto-banner"]} alt="foto banner"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum doloremque officia quas placeat, esse ipsum aliquid numquam veritatis ut aliquam sint repellendus quae recusandae modi voluptatum! Voluptatem placeat praesentium architecto?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum doloremque officia quas placeat, esse ipsum aliquid numquam veritatis ut aliquam sint repellendus quae recusandae modi voluptatum! Voluptatem placeat praesentium architecto?</p>
                <ContenedorNoticiasDestacadas location="infoNoticia"></ContenedorNoticiasDestacadas>
            </div>
        </div>
    )
}
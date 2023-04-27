import { useContext } from "react";
import { Link } from "react-router-dom";
import { UseApiContext } from "../../context/ApiContext";

const posicionarPantalla=()=>{
    window.scroll({
        top: 0,
        left: 0});
}

export const BasquetNoticias=()=>{
    const {noticias,periodistas}=useContext(UseApiContext)
    return(
        <div className="contenedor-noticias-futbol">
            <p className="ruta">Home {">"} Basquet {">"}<span> Noticias</span></p>
            <div className="titulos">
                <h3>El mundo del <span>fúbol</span> te está esperando</h3>
                <p className="parrafo">Explora las noticias más importantes del mundo deportivo, relatadas por <span>periodistas con pasión</span>.</p>
            </div>
            <div className="contenedor-noticias">
                <div className="noticias">
                    {noticias.map(i=>{
                        const periodista = periodistas.find( p => p.nombre === i.periodista );
                        return(
                            <>
                                {i.tipo==="basquet"&&
                                    <Link onClick={posicionarPantalla} to={i.id}>
                                        <div className="noticia">
                                            <img src={i["foto-noticia"]} alt="Foto noticia" />
                                            <div className="periodista-titulo">
                                                <img src={periodista.foto} alt="Foto periodista" />
                                                <p>{i.titulo}</p>
                                            </div>
                                        </div>
                                    </Link>
                                }
                            </>
                        )
                    })}
            </div>
            </div>
        </div>
    )
}
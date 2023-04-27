import { useContext } from "react"
import { UseApiContext } from "../../context/ApiContext"
import { BasquetPartidos } from "./BasquetPartidos"


export const ContenedorBasquetPartidos=()=>{
    const {dataApiBasquet}=useContext(UseApiContext)
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate()
    let mesActual = fechaActual.getMonth() + 1; 
    const anioActual = fechaActual.getFullYear()
    switch (mesActual) {
        case 1:
            mesActual="enero"
            break;
        case 2:
            mesActual="febrero"
            break;
        case 3:
            mesActual="marzo"
            break;
        case 4:
            mesActual="abril"
            break;
        case 5:
            mesActual="mayo"
            break;
        case 6:
            mesActual="junio"
            break;
        case 7:
            mesActual="julio"
            break;
        case 8:
            mesActual="agosto"
            break;
        case 9:
            mesActual="septiembre"
            break;
        case 10:
            mesActual="octubre"
            break;
        case 11:
            mesActual="noviembre"
            break;
        case 12:
            mesActual="diciembre"
            break;
        default:
            break;
    }
    return(
        dataApiBasquet.length!==0?<BasquetPartidos></BasquetPartidos>:
        <div className="contenedor-info-futbol">
            <p className="ruta">Home {">"} Basquet {">"}<span> Partidos</span></p>
            <div className="info-futbol">
                <div className="titulo">
                    <h3>Vivi la experiencia del <span>basquet en una sola página</span></h3>
                    <p className="parrafo-principal">Solo hace falta un clic para disfrutar de la actualidad del deporte en vivo.</p>
                    <p className="partidos-disponibles">Partidos disponibles hoy</p>
                    <div className="contenedor-fecha">
                        <div className="fecha">{diaActual} de {mesActual} del {anioActual}</div>
                    </div>
                </div>
                <div className="contenedor-partidos">
                    <div className="partidos">
                    <div className="contenedor-no-partidos">
                        <div className="no-partidos">
                            <p>No hay partidos en este momento.</p> 
                            <p>Pronto volvemos con <span>más DeporT para disfrutar.</span></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
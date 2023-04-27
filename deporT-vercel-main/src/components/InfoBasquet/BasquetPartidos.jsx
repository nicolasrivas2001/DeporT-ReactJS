import { useContext } from "react"
import { UseApiContext } from "../../context/ApiContext"
import { BotonTwitch } from "../BotonTwitch"


export const BasquetPartidos=()=>{
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
        <div className="contenedor-info-basquet">
            <p className="ruta">Home {">"} Basquet {">"}<span> Partidos</span></p>
            <div className="info-futbol">
                <div className="titulo">
                    <h3>Vivi la experiencia del <span>basquet en una sola página</span></h3>
                    <p className="parrafo-principal">Solo hace falta un clic para disfrutar de la actualidad del deporte en vivo.</p>
                    <div>
                        <p className="partidos-disponibles">Partidos disponibles hoy</p>
                    </div>
                    <div className="contenedor-fecha">
                        <div className="fecha">{diaActual} de {mesActual} del {anioActual}</div>
                    </div>
                </div>
                <div className="contenedor-partidos">
                    <div className="partidos">
                    <div className="contenedor-liga">
                        <p className="liga">NBA</p>
                    </div>
                    {dataApiBasquet.length!==0?dataApiBasquet.response.map(i=>{console.log(i)
                            let time=""
                            if(i.status.long==="Game Finished" || i.status.long==="After Over Time"){
                                time="Game Finished"
                            }else if(i.status.long==="Not Started"){
                                time="Not Started"
                            }else(
                                time=i.status.timer
                            )
                            return(
                                <div className="partido">
                                        <div className="teams">
                                            <div className="team">
                                                <img src={i.teams.home.logo} alt={"logo"+i.teams.home.name}></img>
                                                <div>
                                                    <p className="name">{i.teams.home.name}</p>
                                                    <p className="goals">{i.scores.home.total}</p>
                                                </div>
                                            </div>
                                            <div className="contenedor-time">
                                                <div className="time">
                                                    {time==="Game Finished"?
                                                    <p className="finished">Finalizado</p>
                                                    :time==="Not Started"?<p className="soon">{i.time}</p>:
                                                    <p className="in-game">{time}° {time!=="Game Finished"&&time!=="Not Started"&&i.status.short}</p>
                                                    }
                                                </div>
                                                <div className="contenedor-separador">
                                                        <div className="separador"></div>
                                                </div>
                                            </div>
                                            <div className="team">
                                                <img src={i.teams.away.logo} alt={"logo"+i.teams.away.name}></img>
                                                <div>
                                                    <p className="name">{i.teams.away.name}</p>
                                                    <p className="goals">{i.scores.away.total}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <BotonTwitch text={"Ver transmisión"}></BotonTwitch>
                                        </div>
                                </div>
                            )
                    }):
                    <div className="contenedor-no-partidos">
                            <div className="no-partidos">
                                <p>No hay partidos en este momento.</p> 
                                <p>Pronto volvemos con <span>más DeporT para disfrutar.</span></p>
                            </div>
                    </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    ) 
}
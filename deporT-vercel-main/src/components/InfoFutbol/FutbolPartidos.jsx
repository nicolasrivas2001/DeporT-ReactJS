import { useContext } from "react";
import { UseApiContext } from "../../context/ApiContext";
import { BotonTwitch } from "../BotonTwitch";


export const FutbolPartidos=()=>{
    const {dataApi}=useContext(UseApiContext)
    console.log(dataApi)
    const leagues=[]
    if(dataApi.response.length!==0){
        dataApi.response.map(i=>{
            if(!leagues.includes(`${i.league.name}`)){
                leagues.push(i.league.name)
            }
            return i
        })
    }
    function compareByLeague(match1, match2) {
         return match1.league.name - match2.league.name;
    }
    function groupObjectsByName(objects) {
        return Object.values(objects.reduce((acc, obj) => {
          const league = obj.league.name;
          if (!acc[league]) {
            acc[league] = [];
          }
          acc[league].push(obj);
          return acc;
        }, {}));
      }
    const A = dataApi.response.sort(compareByLeague);
    const arrayEstructurado=groupObjectsByName(A)
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
        <div className="contenedor-info-futbol">
            <p className="ruta">Home {">"} Fútbol {">"}<span> Partidos</span></p>
            <div className="info-futbol">
                <div className="titulo">
                    <h3>Vivi la experiencia del <span>fútbol en una sola página</span></h3>
                    <p className="parrafo-principal">Solo hace falta un clic para disfrutar de la actualidad del deporte en vivo.</p>
                    <p className="partidos-disponibles">Partidos disponibles hoy</p>
                    <div className="contenedor-fecha">
                        <div className="fecha">{diaActual} de {mesActual} del {anioActual}</div>
                    </div>
                </div>
                <div className="contenedor-partidos">
                    <div className="partidos">
                    {dataApi.length!==0?
                    arrayEstructurado.map(i=>{
                        const liga=i[0].league.name
                        return(
                            <div className="partidos-liga">
                                <div className="contenedor-liga">
                                    <p className="liga">{liga}</p>
                                </div>
                                {i.map(p=>{
                                    return(
                                        <div className="partido">
                                            <div className="teams">
                                                <div className="team">
                                                    <img src={p.teams.home.logo} alt={"logo"+p.teams.home.name}></img>
                                                    <div>
                                                        <p className="name">{p.teams.home.name}</p>
                                                        <p className="goals">{p.goals.home}</p>
                                                    </div>
                                                </div>
                                                <div className="contenedor-time">
                                                    <div className="time">
                                                        {p.fixture.status.elapsed===45?<p className="entretiempo">Entretiempo</p>:<p className="in-game">{p.fixture.status.elapsed+"'"}</p>
                                                        }
                                                    </div>
                                                    <div className="contenedor-separador">
                                                        <div className="separador"></div>
                                                    </div>
                                                </div>
                                                <div className="team">
                                                    <img src={p.teams.away.logo} alt={"logo"+p.teams.away.name}></img>
                                                    <div>
                                                        <p className="name">{p.teams.away.name}</p>
                                                        <p className="goals">{p.goals.away}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <BotonTwitch text={"Ver transmisión"}></BotonTwitch>
                                            </div>
                                    </div>
                                    )
                                })}
                                <div className="separador-ligas"></div>
                            </div>
                        )
                    })
                    :
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
import { useParams } from "react-router-dom"
import { FutbolNoticias } from "../components/InfoFutbol/FutbolNoticias"
import { ContenedorFutbolPartidos } from "../components/InfoFutbol/ContenedorFutbolPartidos"


export const InfoFutbol=()=>{
    const {tipo}=useParams()
    return(
        tipo==="partidos"?<ContenedorFutbolPartidos></ContenedorFutbolPartidos>:<FutbolNoticias></FutbolNoticias>
    )
}
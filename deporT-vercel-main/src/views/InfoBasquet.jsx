import { useParams } from "react-router-dom"
import { BasquetNoticias } from "../components/InfoBasquet/BasquetNoticias"
import { ContenedorBasquetPartidos } from "../components/InfoBasquet/ContenedorBasquetPartidos"


export const InfoBasquet=()=>{
    const {tipo}=useParams()
    return(
        tipo==="partidos"?<ContenedorBasquetPartidos></ContenedorBasquetPartidos>:<BasquetNoticias></BasquetNoticias>
    )
}
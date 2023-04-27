/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Fragment, useContext } from "react"
import { Link } from "react-router-dom"
import { UseApiContext } from "../../context/ApiContext"

export const NoticiasDestacadas=(props)=>{
    const {periodistas}=useContext(UseApiContext)
    let newArray=[]
    if(props.noticias!==undefined){
        if(props.position+3>=props.noticias.length){
            newArray=props.noticias.slice(props.position,props.noticias.length)
        }else if(props.noticias.length>=4){
            newArray=props.noticias.slice(props.position,props.position+3)
        }else if(props.noticias.length===3){
            newArray=props.noticias.slice(0,2)
        }
        else if(props.noticias.length===2){
            newArray=props.noticias.slice(0,1)
        }
        else if(props.noticias.length===1){
            newArray=props.noticias[0]
        }
    }
    
    const posicionarPantalla=()=>{
        window.scroll({
            top: 0,
            left: 0});
    }

    return(
        <div className="noticias-destacadas">
            {newArray.length!==0?newArray.map((i,n)=>{
                const periodista = periodistas.find( p => p.nombre === i.periodista );
                    return(
                        <Fragment key={n}>
                            {i.recomendado===true &&
                                <Link onClick={posicionarPantalla} className="link" to={`/${i.tipo}/noticias/${i.id}`}>
                                    <div className="noticia">
                                        <img src={i["foto-noticia"]} alt="Foto noticia" />
                                        <div className="periodista-titulo">
                                            <img src={periodista.foto} alt="Foto periodista" />
                                            <p>{i.titulo}</p>
                                        </div>
                                    </div>
                                </Link>
                            }
                        </Fragment>
                    )
            }):<div className="no-noticias">No hay noticias destacadas</div>}
        </div>
    )
}
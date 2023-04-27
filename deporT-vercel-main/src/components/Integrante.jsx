  export const Integrante=(props)=>{
    return(
        <a href={props.link} target="_blank" rel="noreferrer">
          <div className="participante">
            <div className="contenedor-imagen">
              <img src={props.imagen} alt={props.nombre} />
            </div>
            <p className="profesion">{props.profesion}</p>
            <p>{props.nombre}</p>
          </div>
        </a>
    )
  }
import { Link } from "react-router-dom"

export const Item = ({producto}) => {

    return(
        <div> 
        <img src={producto.pictureURL} width={400} height={250}/>
        <h4 size={20}>{producto.title} </h4>             
        <p>Precio: {producto.price} </p>
        <p>Descripción: {producto.description} </p> 
            {
                producto.stock>0
                ?<Link to = { `/item/${producto.id}`  } className="btn btn-primary my-2">Ver más</Link>
                : <p className="btn btn-outline-danger"> No hay stock para este producto</p>

            }
        
        <hr/>                             
       </div>  
    )



}
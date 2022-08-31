

export const Item = ({producto}) => {

    return(
        <div> 
        <img src={producto.pictureURL} />
        <h4>{producto.title} </h4>             
        <p>Precio: {producto.price} </p>
        <p>Descipción: {producto.description} </p>          
        <a className="btn btn-primary my-2">Ver más</a>
        <hr/>                             
       </div>  
    )



}
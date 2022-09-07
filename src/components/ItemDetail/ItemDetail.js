

export const ItemDetail = ( {item} ) => {


    return(
        <div className="container" >
                <img src= {item.pictureURL}/>
                <h3> Modelo: {item.title}  </h3>
                <p> Descripción:  {item.desciption}  </p>                
                <h3> Categoría: {item.category}  </h3>
                <h4> Precio {item.price}  </h4>


        </div>

    )

}
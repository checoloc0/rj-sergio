import { useState } from "react"
import { Counter } from "../Counter/Counter"


export const ItemDetail = ( {item} ) => {
   
    const [cantidad,setCantidad]= useState(1)
    
    const handleAgregar = ()=>    
    {
        const itemToCart ={
            id: item.id,
            precio: item.price,
            modelo:item.title,
            categoria:item.category,
            cantidad
        }       
           console.log(itemToCart) 

    }


    return(
        <div className="container" >
                <img src= {item.pictureURL}/>
                <h3> Modelo: {item.title}  </h3>
                <p> Descripción:  {item.desciption}  </p>                
                <h3> Categoría: {item.category}  </h3>
                <h4> Precio {item.price}  </h4>
                <hr/>
            <Counter max={item.stock}
                    counter={cantidad}
                    setCounter={setCantidad}    
                    handleAgregar={handleAgregar}        />

        </div>

    )

}
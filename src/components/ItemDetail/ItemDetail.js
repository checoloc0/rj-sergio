import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import { Counter } from "../Counter/Counter"


export const ItemDetail = ( {item} ) => {
   
    const { cart,addToCart,isInCart}= useContext(CartContext)
    const [cantidad,setCantidad]= useState(1)

    console.log(cart)
    
    const handleAgregar = ()=>    
    {
        const itemToCart ={
            id: item.id,
            precio: item.price,
            modelo:item.title,
            categoria:item.category,
            cantidad
        }       
       console.log( isInCart(item.id))
        addToCart(itemToCart)
           
    }


    return(
        <div className="container" >
                <img src= {item.pictureURL}/>
                <h3> Modelo: {item.title}  </h3>
                <p> Descripción:  {item.desciption}  </p>                
                <h3> Categoría: {item.category}  </h3>
                <h4> Precio {item.price}  </h4>
                <hr/>


{
    isInCart(item.id) && <p>El producto ya fue agregado</p>
}
    {
        isInCart(item.id)
        ? <Link to="/cart" className="btn btn-success my-2"> Terminar mi compra </Link>
        : <Counter max={item.stock}
        counter={cantidad}
        setCounter={setCantidad}    
        handleAgregar={handleAgregar} />

    }
            
                   

        </div>

    )

}
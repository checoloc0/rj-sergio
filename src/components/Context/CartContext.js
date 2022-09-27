import { createContext } from "react";
import { useState } from 'react';
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    //Función para agregar el item al carrito
    const addToCart = (item)=>{
      setCart([...cart,item])
    }
    //validación si el producto esta en el carrito
    const isInCart =(id)=> {
      return cart.some((item) => item.id=== id)
    
    }
    //funcion para contar los elementos del carrito
    
    const cartQuantity = () =>{
         return cart.reduce( (acc,item)=> acc+ item.cantidad,0  )
    }

  const cartTotal = () => {
    return cart.reduce( (acc,item)=> acc+ item.cantidad * item.precio,0  )
  }

  const removeItem = (id) => {
    setCart( cart.filter( (item)=> item.id !== id  ) )
  }



  const emptyCart = () => {
        Swal.fire(
        {
            title:'Estas Seguro?',
            text :"No serás capas de revertir los cambios!",
            icon:'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText:'Si, Bórralo!'
        }).then ((result)=>{
            if ( result.isConfirmed){
                setCart([])
            }

        } )
        
     
  }

const terminarCompra =(id)=>{

  Swal.fire(
    {
        title:'Tu compra es exitosa!!',
        text : `Tú Número de compra es ${id}` ,
        icon:'success',      
        confirmButtonColor: '#3085d6',      
        confirmButtonText:'Gracias!'
    })
    setCart([])


}


    return (
       <CartContext.Provider value={{cart,addToCart,isInCart,cartQuantity,cartTotal,emptyCart,removeItem,terminarCompra}}>
        {children}

        </CartContext.Provider>
    )
}
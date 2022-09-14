import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'


export const Cart =() => {
    const {cart,cartTotal, emptyCart,removeItem}= useContext(CartContext)
    return(
        <div>
                <h2 className="container my-5">Productos del carrito</h2>
                <hr/>
            {  cart.map ((item)=>(
                        <div key={item.id}> 
                            <h3>Modelo: {item.modelo}  </h3>
                            <p>Categoria: {item.categoria}  </p>
                            <p>Precio: {item.precio}  </p>
                            <small>Cantidad: {item.cantidad}  </small>
                            <button onClick= { () =>removeItem(item.id) } className="btn btn-danger mx-2"><BsFillTrashFill/> </button>
                            <hr/>

                    </div>

            )


            )}
            <h4>Total a Pagar: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger" > Vaciar Carrito</button>
        </div>
    )
} 
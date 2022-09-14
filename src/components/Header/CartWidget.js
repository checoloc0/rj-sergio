

import { useContext } from 'react';
import { BiCart  } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';


export const CartWidget = () =>{

    const { cartQuantity} = useContext(CartContext)
    return (

      <Link to ="/cart">
        < BiCart className="cart-image" />
         <span>{cartQuantity()}</span>
        </Link>
           
      

    )

}
import {useState} from 'react'
import { Cart } from '../Cart/Cart'


import { Link } from "react-router-dom";


export const Counter = ({max,counter,setCounter,handleAgregar}) =>{

 

    const handleSumar =() => {
        if(counter < max){
        setCounter(counter+1)
        }
    }

    const handleRestar = () =>{
        if(counter >1){
        setCounter (counter-1)
        }
    }

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={handleRestar} >-</button>
            <span className="mx-3">{counter}</span>

            <button className="btn btn-primary" onClick={handleSumar}>+</button>
            <br/>
            <button onClick= {handleAgregar} className="btn btn-success my-3">Agregar al Carrito</button>
            <br/>
            <Link to = { "/cart"  } className="btn btn-primary my-2">Terminar compra</Link>
           

        </div>
    )



}
import { useState } from "react"

export const ItemCount =(props) => {
   
let stock= props.stock

 let [contador,setContador]= useState(1)

 const estado= useState()


   const sumar =() =>{
        if( contador<stock){        
        setContador(contador+1)
     
        }
   }

const restar =()=>{
        if( contador> 0){     
        setContador(contador-1)
        console.log(contador)
        }
}


    return (
        <div>          
             
              <p>Total de productos en stock {stock}</p>
                <hr/>
                <button onClick={restar} className="btn btn-outline-primary">-</button>
                <span className="mx-2">{contador}</span>
                <button onClick={sumar} className="btn btn-outline-primary"> + </button>
               <br/>
                <button className="btn btn-outline-primary"> Agregar al Carrito </button>         
              
                
        </div>


    )


}
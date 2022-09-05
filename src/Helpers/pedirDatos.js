import { stock } from "../Data/Data"

export const pedirProducto = () =>{
    return new Promise ( (resolve, reject)=>{
         setTimeout( ()=>{
             resolve (stock)
         },1000)
  
       
    })
  
  }
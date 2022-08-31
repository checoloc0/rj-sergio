
import { useEffect, useState } from "react"
import { pedirProducto } from "../../Helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList"



export const ItemListContainer =(props) => {
     
  const [productos,setProductos]= useState([]) 
   
  console.log(productos)

  useEffect( ()=>{
      pedirProducto()
          .then( (res)=>{
              setProductos(res)
            })
          .catch( (res)=>{
              console.log(res)
            })
          .finally( ()=>{
              // console.log("Fin del proceso")
          })
    },[])




return(
  
    <div>
        <h2>Productos</h2>  
        <hr/>
        Tipo de Producto: {props.seccion}
       <ItemList productos={productos}/>
        

        
    </div>


)


}
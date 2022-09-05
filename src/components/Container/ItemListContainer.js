
import { useEffect, useState } from "react"
import { pedirProducto } from "../../Helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'


export const ItemListContainer =() => {
     
  const [productos,setProductos]= useState([]) 
  const [loading , setLoading] = useState(true)

  const { categoryId } = useParams();

 console.log(categoryId)
  useEffect( ()=>{
      setLoading(true)
      pedirProducto()
          .then( (res)=>{
            if( !categoryId ){
            setProductos(res)}else{
                setProductos(res.filter((prod)=> prod.category=== categoryId ))
            }

           

            })
          .catch( (res)=>{
              console.log(res)
            })
          .finally( ()=>{
              // console.log("Fin del proceso")
              setLoading(false)
          })
    },[categoryId])




return(
  
    <div>
        <h2>Productos 2</h2>  
        <hr/>
            {
              loading ? <h2>Cargando...</h2>
              :  <ItemList productos={productos}/>
            }
     
        

        
    </div>


)


}
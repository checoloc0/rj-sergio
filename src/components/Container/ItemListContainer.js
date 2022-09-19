
import { useEffect, useState } from "react"
import { pedirProducto } from "../../Helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { collection,getDocs } from 'firebase/firestore'
import { db} from '../Firebase/config'


export const ItemListContainer =() => {
     
  const [productos,setProductos]= useState([]) 
  const [loading , setLoading] = useState(true)

  const { categoryId } = useParams();

  /*
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

*/

useEffect( ()=>{
  setLoading(true)
 // 1 Armar la refrencia (syn)
  const prodcutosRef = collection(db,'productos')
  //2 consumir esa refrencia
  getDocs(prodcutosRef)
  .then( (resp)=>{ 
      console.log(resp)
  }  )
     
},[categoryId])


return(
  
    <div>
        <h2>Productos </h2>  
        <hr/>
            {
              loading ? <h2>Cargando...</h2>
              :  <ItemList productos={productos}/>
            }
     
        

        
    </div>


)


}
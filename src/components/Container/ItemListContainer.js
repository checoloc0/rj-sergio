
import { useEffect, useState } from "react"
import { pedirProducto } from "../../Helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { collection,getDocs, query, where } from 'firebase/firestore'
import { db } from '../Firebase/config'
import { Loader } from "../Loader/Loader";


export const ItemListContainer =() => {
     
  const [productos,setProductos]= useState([]) 
  const [loading , setLoading] = useState(true)

  const { categoryId } = useParams();


 console.log(categoryId)




useEffect( ()=>{
  setLoading(true)
  //1.- Armar la referencia (sync) 
  const prodcutosRef = collection(db, 'productos')

  const q= categoryId 
          ?query(prodcutosRef,where('category','==',categoryId))
          :prodcutosRef
  //2.- Consumir esa refrencia (async)

  getDocs(q) 
    .then((resp)=>{
      const productosDB=resp.docs.map((doc)=> ({id:doc.id, ...doc.data()}) )
      setProductos(productosDB)      
    })
    .finally(()=>{
        setLoading(false)
    })


   
},[categoryId])





return(
  
    <div>
        <h2>Productos </h2>  
        <hr/>
            {
              loading ? <Loader/>
              :  <ItemList productos={productos}/>
            }
     
        

        
    </div>


)


}
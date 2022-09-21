import { useEffect, useState, useSyncExternalStore } from 'react'
import { pedirProducto } from '../../Helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { db  } from '../Firebase/config'
import { doc, getDoc} from "firebase/firestore"

export const ItemDetailContainer =() => {

    const [item, setItem] = useState (null)
    const [loading, setLoading]= useState(true)
    const { itemId } = useParams()
/*
    useEffect ( ()=>{
           setLoading(true)
        pedirProducto()
            .then ((res)=>  { 
                    setItem( res.find((prod)=> prod.id=== Number(itemId))   ) } )
            .catch( err=> console.log(err))
            .finally( ()=> {   setLoading(false)} )

    },[])
*/

useEffect ( ()=>{
    //1 armar la diferencia sin
    const docRef = doc(db,'productos',itemId)
    //2 llamar a la DB (asyn)
    getDoc(docRef)
        .then( (doc)=>{
            setItem( { id:doc.id, ...doc.data()   } )
        }   )
        .finally( ()=> {   setLoading(false)} )

},[])

    return(
        <div>
            
               {
                loading 
                 ? <h2> Cargando...</h2>
                 : <ItemDetail item= {item}/>
               }

             

 

        </div>


    )





}

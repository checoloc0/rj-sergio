import { useEffect, useState, useSyncExternalStore } from 'react'
import { pedirProducto } from '../../Helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer =() => {

    const [item, setItem] = useState (null)
    const [loading, setLoading]= useState(true)
    const { itemId } = useParams()

    useEffect ( ()=>{
           setLoading(true)
        pedirProducto()
            .then ((res)=>  { 
                    setItem( res.find((prod)=> prod.id=== Number(itemId))   ) } )
            .catch( err=> console.log(err))
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

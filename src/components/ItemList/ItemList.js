import { ItemCount } from '../Container/ItemCount';
import { Item } from '../Item/Iteml';

export const ItemList = ({productos=[]}) =>{

  return(
    <div>
    {  productos.map( (prod)=>{
        return(
                <div key={prod.id}>
                 <Item producto={prod} /> 
                { /* < ItemCount stock={prod.stock}/> */ }
                <hr/>                             
               </div>  

        )})
    
    }
</div>



  )//return



}
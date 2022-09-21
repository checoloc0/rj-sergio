import { ItemCount } from '../Container/ItemCount';
import { Item } from '../Item/Iteml';

export const ItemList = ({productos=[]}) =>{

  return(
    <div className="container my-5">
       
      { 
    
        productos.map( (prod)=>{
          if(prod.stock>0) {
              return <Item producto={prod} key={prod.id}/>
          }  
      })}
</div>



  )//return



}
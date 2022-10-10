
import { Item } from '../Item/Iteml';

export const ItemList = ({productos=[]}) =>{

  return(
    //<div className="container my-6">
    <div className="flex-container">
       
      { 
    
        productos.map( (prod)=>{
          if(prod.stock>0) {
              return <Item producto={prod} key={prod.id}/>
          }  
      })}
</div>



  )//return



}
import { ItemCount } from './ItemCount';

export const ItemListContainer =(props) => {

  
return(
    <section>
        <h4>
          {props.seccion}


          <ItemCount stock={props.stock}/>
        </h4>   
        
    </section>


)


}
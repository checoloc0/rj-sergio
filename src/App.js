import './App.css'
import './components/Header/Header.css'

import { Header } from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/Container/ItemListContainer';
import  {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { Contacto } from './components/Contacto/Contacto';
import { Nosotros } from './components/Nosotros/Nosotros';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailcontainer';
import { Cart } from './components/Cart/Cart';

import {  CartProvider } from './components/Context/CartContext';
import { Checkout } from './components/Checkout/Checkout';



const App = () => {




  return (
    <div>
 <CartProvider>
    <BrowserRouter>
       <Header/>
        <Routes>
         <Route path='/nosotros' element= { <Nosotros/> } />
         <Route path='/contacto' element= { <Contacto/> } />  
         <Route path='/cart' element = { <Cart/>} />
         <Route path='/checkout' element={ <Checkout/> } />
          
         <Route path='/productos/:categoryId' element= { <ItemListContainer/> } />  
         <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/>
         <Route path='/' element ={<ItemListContainer/>}/> 
         <Route path ='*' element = { <Navigate to="/"/>  }  />
           </Routes>
     </BrowserRouter>
     </CartProvider>
    </div>   
  );
}

export default App;

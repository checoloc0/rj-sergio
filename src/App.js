import './App.css'
import './components/Header/Header.css'

import { Header } from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/Container/ItemListContainer';


const App = () => {
  return (
    <div>
     <Header/>
     <ItemListContainer seccion="Producto 1" stock="5"/>
     
    </div>   
  );
}

export default App;

import './App.css'
import './components/Header/Header.css'
import logo from './images/Logo.png'
import { Header } from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';



const App = () => {
  return (
    <div>
     <Header/>
     <ItemListContainer saludo={'saludo'}/>
    </div>   
  );
}

export default App;

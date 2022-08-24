import { Barranav } from './NavBar'
import { ItemListContainer } from '../ItemListContainer';

export const Header = () => {

return (
        <header className="bg-header">
            <div className="header-container">

               <h1 className="header-title">Tienda de Sneakers</h1>
                <Barranav/>
                <ItemListContainer seccion="Productos"/>
                </div>

               
        </header>
)



}
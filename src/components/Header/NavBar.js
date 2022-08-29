
import { CartWidget } from "./CartWidget"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Barranav = () =>{
    return (
        <section>
           <nav className="header-navbar">
                  <a href="#" className="header-navlink">Hombres</a>     
                  <a href="#" className="header-navlink">Mujeres</a>    
                  <a href="#" className="header-navlink">Niños</a>                    
                  <a href="#" className="header-navlink">Hot Fashion</a>  
                  <a href="#" className="header-navlink">Login</a> 
                  <CartWidget/>
                 </nav>
            
        </section>

    )



}


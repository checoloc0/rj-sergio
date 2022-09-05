
import { CartWidget } from "./CartWidget"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


export const Barranav = () =>{
    return (
        <section>
           <nav className="header-navbar">
                  <Link to ='/productos/soccer' className="header-navlink">Soccer</Link>
                  <Link to ='/productos/casual' className="header-navlink">Casual</Link>
                  <Link to ='/productos/basketball' className="header-navlink">Basketball</Link>
              
                  <Link to ='/nosotros' className="header-navlink">Nosotros</Link>
                  <Link to ='/contacto' className="header-navlink">Contacto</Link>
                  <Link to ='/' className="header-navlink">Login</Link>
                  

                  <CartWidget/>
                 </nav>
            
        </section>

    )



}


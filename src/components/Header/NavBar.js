
import { CartWidget } from "./CartWidget"

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


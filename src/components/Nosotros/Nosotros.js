import { useEffect } from "react"
import imgNosotros from '../../images/nostros.jpg' 


export const Nosotros =() => {

    const handleClick = (e) => {
            console.log(e)
    }
   

    useEffect (()=>{
        window.addEventListener('click',handleClick)
        return ()=>{
                window.removeEventListener('click',handleClick)
        }
    },[])

    return (
        <div className = "container my-5">
                <h2 onClick={handleClick}>Nosotros</h2>
                <p>EGACY STORE NACE EN 2010 COMO EL PROYECTO PERSONAL DE UN AMANTE DE LOS TENIS RETRO Y DE MODA CON LA VISION DE QUERER CONTAGIAR A MAS GENTE CON SU PASION POR LOS SNEAKERS , A DIFERENCIA DE OTRAS SNEAKER STORES NUESTRO OBJETIVO ES OFRECERTE PRECIOS MAS ACCESIBLES EN PRODUCTOS ORIGINALES (AUTENTICOS) ,  ADEMAS DE QUE LOS PUEDAS  ADQUIRIR DESDE CUALQUIER PARTE DE MEXICO,  TENDRAS LA CONFIANZA DE QUE TU ENVIO O ENTREGA SERA PROCESADA LO MAS RAPIDO POSIBLE Y LO RECIBIRAS DE MANERA SEGURA.

OFRECEMOS SNEAKERS Y STREETWEAR DE EDICIONES ESPECIALES/LIMITADAS  Y REGULARES QUE PUDIERAS ENCONTRAR EN OTRAS TIENDAS PERO COMO TE LO DIJIMOS ANTES A MEJORES PRECIOS , ADEMAS CONTAMOS CON  PRODUCTOS DE LIMPIEZA Y RESTAURACION PARA TU CALZADO.</p>
<img src={imgNosotros}/>
        </div>

    )


}



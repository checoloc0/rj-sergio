import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { addDoc, collection} from "firebase/firestore"
import { CartContext } from "../Context/CartContext"
import { db } from "../Firebase/config"


export const Checkout = () => {

    const {cart,cartTotal,terminarCompra }= useContext(CartContext)

    const [values, setValues]= useState({
                    nombre:'',
                    email:'',
                    direccion:''
        })

        const handleInputChange=(e) =>{
                setValues({
                        ...values,
                        [e.target.name]:e.target.value

                }
                )
        }


    const handleSubmit= (e) => {
        e.preventDefault()
        const orden= {
               comprador:values,
               items:cart,
               total:cartTotal()

        }

        if(values.nombre.length<2){
            alert("Nombre incorrecto")
            return
        }
        if(values.direccion.length<2){
            alert("Dirección incorrecta")
            return
        }

        if(values.email.length<2){
            alert("Email incorrecto")
            return
        }

        //Enviar la orden a FB
     
        const ordenesRef= collection(db,'ordenes')
        addDoc(ordenesRef,orden)
            .then((doc)=> {
                terminarCompra(doc.id)
            })
    }

    if(cart.length===0){
            return <Navigate to="/" />
    }



return (
    <div className="container my-5">
        <h2>Checkout</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
               <input name="nombre" onChange={handleInputChange} value={values.nombre} type = {'text'} className="my-3 form-control" placeholder ="Tu nombre" ></input>
               <input name= "email" onChange={handleInputChange} value={values.email}   type = {'email'} className="my-3 form-control" placeholder="Email"></input>
               <input name="direccion" onChange={handleInputChange} value={values.direccion}  type = {'text'} className="my-3 form-control" placeholder="Dirección"></input>

                <button type="submit" className="btn btn-primary"> Enviar</button>
            </form>

    </div>

)

}
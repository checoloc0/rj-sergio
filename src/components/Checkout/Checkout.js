import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { addDoc, collection, getDoc, updateDoc,doc, getFirestore,writeBatch,getDocs,query,where,documentId} from "firebase/firestore"
import { CartContext } from "../Context/CartContext"
import { db } from "../Firebase/config"

import Swal from 'sweetalert2'

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


    const handleSubmit= async(e) => {
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
        const batch = writeBatch(db)
        const ordenesRef= collection(db,'ordenes')
        const productosRef = collection(db,'productos')
        const q = query(productosRef,where(documentId(),'in',cart.map(item=>item.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach( (doc)=>{

            const itemInCart= cart.find ( item => item.id=== doc.id)
            if(doc.data().stock >= itemInCart.cantidad){
                batch.update( doc.ref,{
                    stock: doc.data().stock - itemInCart.cantidad
                })
            }else{
                outOfStock.push(itemInCart)
            }

        })

        if(outOfStock.length===0){
                batch.commit()
                .then( () => {
                        addDoc(ordenesRef,orden)
                            .then((doc)=>{
                                terminarCompra(doc.id)
                            })
                })
        }else{
           
         Swal.fire(
           {
              title:'Error en la compra',
              text : 'No se pudo procesar tu compra por falta de stock' ,
              icon:'error',      
              confirmButtonColor: '#3085d6',      
              confirmButtonText:'Gracias!'
               })


        }


        /*cart.forEach( (item)=>{
            const docref= doc(db,'productos',item.id)
            getDoc(docref)

                .then( (doc) => {
                    if(doc.data().stock>= item.cantidad){
                        updateDoc(docref,{stock: doc.data().stock - item.cantidad})
                    }else{
                        alert("No hay Stock Suficiente")
                    }
                   
                })


        })*/


//addDoc(ordenesRef,orden)
  //          .then((doc)=> {
   //             terminarCompra(doc.id)
    //        })
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
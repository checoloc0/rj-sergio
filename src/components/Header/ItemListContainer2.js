


const ItemListContainer2= () => {
    //generación de un apromesa

    const pedirDatos= ()=>{
        return new Promise ( (resolve, reject)=>{
                setTimeout(()=>{
                    resolve(stock)
                },3000)}
          )

    }

pedirDatos()
    .then( (res)=>{
        console.log(res)
    })
    .catch((error)=>{
         console.log(error)
    })
    .finally(()=>{
            console.log("Fin del proceso")
    })


}
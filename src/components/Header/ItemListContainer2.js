


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

const stock=[
        { id:1,
        nombre: "Producto 1",
        precio:1000,
        img:'https://via.placehoder.com/250',
        stock: 50,
        desc:"Un gran producto"
         },
         { id:2,
            nombre: "Producto 2",
            precio:1000,
            img:'https://via.placehoder.com/250',
            stock: 50,
            desc:"Un gran producto"
             },
             { id:3,
                nombre: "Producto 3",
                precio:1000,
                img:'https://via.placehoder.com/250',
                stock: 50,
                desc:"Un gran producto"
                 }
]


}
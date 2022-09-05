

export const ItemDetail = ( {item} ) => {


    return(
        <div className="container" >
                <img src= {item.pictureURL}/>
                <h3>  {item.title}  </h3>
                <p>  {item.desciption}  </p>                
                <h3>  {item.category}  </h3>
                <h4>  {item.price}  </h4>


        </div>

    )

}
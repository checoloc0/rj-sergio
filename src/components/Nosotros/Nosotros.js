import { useEffect } from "react"



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
                <h2 onClick={handleClick}>Nosotros 1</h2>
        </div>

    )


}



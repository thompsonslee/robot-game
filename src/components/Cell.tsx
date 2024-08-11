import { Direction } from "../types"
import arrow from "../assets/arrow.png"

interface Props{
    direction?: Direction
}



export default function Cell({direction}:Props){
    console.log(direction)
    return(
        <div  className="cell">
            {
                direction ? (<img className={direction} src={arrow}></img>) : (<p></p>)
            }
        </div>
    )
}
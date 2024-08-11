import { Direction } from "../types"

interface Props{
    direction?: Direction
}

export default function Cell({direction}:Props){
    return(
        <div  className="cell">
            {
                direction ? (<p>{direction}</p>) : (<p></p>)
            }
        </div>
    )
}
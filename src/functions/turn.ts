import { Direction } from "../types"

const turn = (direction: Direction, LR: "left" | "right"):Direction => {
    if(LR === "left" && direction === "N") return "NW"
    if(LR === "right" && direction === "NW")return "N"
  
    const array:Direction[] = ["N","NE","E","SE","S","SW","W","NW"]
    const directionIndex = array.findIndex(item => item === direction)
    if(LR === "left")  return array[directionIndex - 1]
    if(LR === "right") return array[directionIndex + 1]
    else throw new Error("invalid direction")
}
export default turn
import { RobotState, Position } from "../types"

const move = (forwards:boolean, robotState:RobotState):Position => {
    let x = robotState.position.x
    let y = robotState.position.y
  
    let L = 0
    let R = 0
    let U = 0
    let D = 0
  
    const stringArray = robotState.direction.split("")
  
    if(stringArray.includes("N")) U++
    if(stringArray.includes("S")) D++
    if(stringArray.includes("W")) L++
    if(stringArray.includes("E")) R++
    
    if(forwards){
      x += R
      x -= L
      y -= U
      y += D
    }else{
      x -= R
      x += L
      y += U
      y -= D
    }
  
    if(x > 4|| x < 0 || y > 4 || y < 0){
      return(robotState.position)
    }
    return{
      x:x,
      y:y
    }
}
export default move
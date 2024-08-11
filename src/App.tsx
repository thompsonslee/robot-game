import { RobotState, Action, Direction, Position } from "./types"
import Grid from "./components/Grid"
import { useEffect, useReducer } from "react"

const initialRobotState: RobotState = {
  position: {
    x: 2,
    y: 2,
  },
  direction: "N"
}
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


const turn = (direction: Direction, LR: "left" | "right"):Direction => {
  if(LR === "left" && direction === "N") return "NW"
  if(LR === "right" && direction === "NW")return "N"

  const array:Direction[] = ["N","NE","E","SE","S","SW","W","NW"]
  const directionIndex = array.findIndex(item => item === direction)
  if(LR === "left")  return array[directionIndex - 1]
  if(LR === "right") return array[directionIndex + 1]
  else throw new Error("invalid direction")
}

const reducer = (state:RobotState, action:Action ):RobotState => {
  switch(action.type){
    case("TURN_LEFT"):
      return{...state, direction: turn(state.direction,"left")}
    case("TURN_RIGHT"):
      return{...state, direction: turn(state.direction,"right")}
    case("MOVE_FORWARD"):
      return{...state, position: move(true,state)}
    case("MOVE_BACKWARDS"):
      return{...state, position: move(false,state)}
  }
}


function App() {
  const [robotState,dispatch] = useReducer(reducer,initialRobotState)

  const handleKeyPress = (e:KeyboardEvent) => {
    switch(e.key){
      case('ArrowUp'): return dispatch({type:"MOVE_FORWARD"})
      case('ArrowDown'): return dispatch({type:"MOVE_BACKWARDS"})
      case('ArrowLeft'): return dispatch({type:"TURN_LEFT"})
      case('ArrowRight'): return dispatch({type:"TURN_RIGHT"})
    }
  }

  useEffect(() =>{
    const keyPressListener = (e:KeyboardEvent) => handleKeyPress(e)
    window.addEventListener("keydown", keyPressListener)
    return () => window.removeEventListener("keydown",keyPressListener)
  },[])
  return (
    <div className="app">
      <h1>For Bellroy</h1>
      <p>Use the Arrow keys </p>
      <Grid robotState={robotState}/>
    </div>
  )
}

export default App

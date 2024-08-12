import { RobotState, Action} from "./types"
import Grid from "./components/Grid"
import { useEffect, useReducer } from "react"
import move from "./functions/move"
import turn from "./functions/turn"

const initialRobotState: RobotState = {
  position: {
    x: 2,
    y: 2,
  },
  direction: "N"
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

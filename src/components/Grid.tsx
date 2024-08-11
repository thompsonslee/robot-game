import Cell from "./Cell";
import { RobotState } from "../types";

interface Props{
    robotState: RobotState
}


export default function Grid({robotState}:Props){

    const renderGrid = () => {
        const rows = []
        for(let i = 0; i< 5; i++){
            const cells = []
            for(let j = 0; j < 5; j++){
                if(robotState.position.y === i && robotState.position.x === j){
                    cells.push(<Cell key={Math.random()}  direction={robotState.direction}/>)
                }else{
                    cells.push(<Cell key={Math.random()} />)
                }
            }
            rows.push(
                <div className="row" key={Math.random()}>
                    {cells}
                </div>
            )
            
        }
        return <div className="grid">{rows}</div>
    }

    return(
        renderGrid()
    )
}
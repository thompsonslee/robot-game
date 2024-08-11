export type Direction = 
     "N"
    |"NE"
    |"E"
    |"SE"
    |"S"
    |"SW"
    |"W"
    |"NW"

export interface Position{
    x: number
    y: number
}
export interface RobotState{
    position: Position
    direction: Direction
}
export type Action_type = 
 "TURN_LEFT"
|"TURN_RIGHT"
|"MOVE_FORWARD"
|"MOVE_BACKWARDS"

export interface Action{
    type: Action_type
}
import { RobotState } from "../types";

import { describe, it, expect } from "vitest";
import move from "./move";

const RobotFacingNorth:RobotState = {
    position: {
        x:2,
        y:2
    },
    direction: "N"
}
const robotFacingNorthWest:RobotState = {
    position:{
        x:2,
        y:2
    },
    direction: "NW"
}
const robotAtNorthEdge:RobotState = {
    position:{
        x:2,
        y:0
    },
    direction: "N"
}
const robotAtSoutWestCorner:RobotState = {
    position:{
        x: 0,
        y:5
    },
    direction: "NE"
}

describe('move function', () => {
    it('move forward', () => {
        expect(move(true, RobotFacingNorth)).toEqual({x:2,y:1})
    })
    it('move backwards',() => {
        expect(move(false,RobotFacingNorth)).toEqual({x:2,y:3})
    })
    it('move NorthWest',() => {
        expect(move(true,robotFacingNorthWest)).toEqual({x:1,y:1})
    })
    it('stopsAtNorthEdge', () => {
        expect(move(true, robotAtNorthEdge)).toEqual({x:2,y:0})
    })
    it('stopsAtSouthWestCornerReverse', () => {
        expect(move(false,robotAtSoutWestCorner)).toEqual({x:0,y:5})
    })
})

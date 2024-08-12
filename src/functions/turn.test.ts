import { describe, it, expect } from "vitest";
import turn from "./turn"

describe('returns direction to face when turning',() =>{
    it('facing north and turn left', () => {
        expect(turn("N","left")).toEqual("NW")
    })
    it('facing north and turn right', () => {
        expect(turn("N","right")).toEqual("NE")
    })
    it('facing west and turn right', () => {
        expect(turn('W',"right")).toEqual("NW")
    })
})
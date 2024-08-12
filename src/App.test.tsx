import { describe, it, expect } from 'vitest';
import {render} from "@testing-library/react"
import App from "./App";


describe('App', () => {
    render(<App />);
    it('renders 25 cells',() => {
        const cells = document.querySelectorAll(".cell")
        console.log(cells)
        expect(cells.length).toBe(25)
    })
})
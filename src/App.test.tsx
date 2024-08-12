import { describe, it, expect } from 'vitest';
import {render, screen} from "@testing-library/react"
import App from "./App";


describe('App', () => {
    it('renders App Component',() => {
        render(<App />);
        screen.debug()
    })
})
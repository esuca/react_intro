import React, {useContext, useState} from 'react'
import "@testing-library/jest-dom/extend-expect";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

type Theme = "light" | "dark"

const ThemeContext = React.createContext<Theme>("light")

function Parent() {
    return (
        <div>
            <Child/>
        </div>
    )
}

function Child() {
    return <DeepChild/>
}

function DeepChild() {
    const theme = "" // TODO...
    return <p>Theme: {theme}</p>
}

describe("React.Context for state management", () => {
    test("el usuario puede ver el tema de la app correctamente", () => {
        render(<Parent/>)
        expect(screen.queryByText("Theme: light")).toBeInTheDocument()
    })
})
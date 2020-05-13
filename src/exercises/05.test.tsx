import React, {useState} from "react";
import "@testing-library/jest-dom/extend-expect";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import {Languages} from "../exercises-solution/05";

function Languages() {
    const [showAddLanguage, setShowAddLanguage] = useState(false)
    const [languages, setLanguages] = useState(["Javascript", "Typescript", "Kotlin", "Java"])

    function toggleAddLanguageButton() {
        setShowAddLanguage(!showAddLanguage)
    }

    return (
        <div>
            <button onClick={toggleAddLanguageButton}>Toggle add language</button>
            {/* Lógica necesaria para ocultar o no -> <button>Add language</button> */}
            <ul>
                <li>{languages[0]}</li>
                <li>{languages[1]}</li>
                <li>{languages[2]}</li>
                <li>{languages[3]}</li>
            </ul>
        </div>
    )
}

describe.skip("05. Hide and Repeat elements using jsx", () => {
    // Recuerda el método array.map( (value, index) => ... )
    // Value es el item sobre el que estamos iterando, index es la posición de ese item en el array
    test.skip("refactoriza el test usando el método .map", () => {
        const names = ["John", "Pepe", "Alex", "Laura"]
        const names2 = ["1. John", "2. Pepe", "3. Alex", "4. Laura"]

        expect(names).toEqual(names2)
    })

    test.skip("refactoriza el componente usando .map para renderizar una etiqueta <li> por cada lenguaje de languages", () => {
        render(<Languages />);

        expect(screen.getByText("Javascript")).toBeInTheDocument();
        expect(screen.getByText("Typescript")).toBeInTheDocument();
        expect(screen.getByText("Kotlin")).toBeInTheDocument();
        expect(screen.getByText("Java")).toBeInTheDocument();
    })

    test.skip("el botón 'Add language' debe estar oculto la primera vez que pintamos el componente", () => {
        render(<Languages />);

        expect(screen.queryByText("Add language")).not.toBeInTheDocument()
    })

    test.skip("el botón 'Add language' debe ser visible cuando pulsamos en 'Toggle add language'", () => {
        render(<Languages />);

        userEvent.click(screen.getByText("Toggle add language"));
        expect(screen.getByText("Add language")).toBeInTheDocument();
    })
})
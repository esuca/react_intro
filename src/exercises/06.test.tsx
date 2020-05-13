import React, {useState} from "react";
import "@testing-library/jest-dom/extend-expect";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import {Languages} from "../exercises-solution/06";

function Languages() {
    const [showAddLanguage, setShowAddLanguage] = useState(false)
    const [languages, setLanguages] = useState(["Javascript", "Typescript", "Kotlin", "Java"])

    function toggleAddLanguageButton() {
        setShowAddLanguage(!showAddLanguage)
    }

    function addLanguage() {
        const languageToAdd = "React" // NO cambies el valor para que pase el test
        // Recuerda que el array que tienes que pasar a la función setLanguages()
        // Tiene que tener una dirección en memoria diferente.
        // Para ello copia el contenido del array actual en otro y añade "React".

        // setLanguages(...)
    }

    return (
        <div>
            <button onClick={toggleAddLanguageButton}>Toggle add language</button>>
            {showAddLanguage ? <button onClick={addLanguage}>Add language</button> : null}
            <ul>
                {languages.map((language, index) => <li key={index}>{language}</li>)}
            </ul>
        </div>
    )
}

describe.skip("06. Update an array or object", () => {


    test.skip("cuando el usuario haga click en el botón 'Add language' debería aparecer React en la lista de lenguages", () => {
        render(<Languages />)

        expect(screen.queryByText("React")).not.toBeInTheDocument()

        userEvent.click(screen.getByText("Toggle add language"))
        userEvent.click(screen.getByText("Add language"))

        expect(screen.queryByText("React")).not.toBeInTheDocument()
    })

})
import React, {useState} from "react";

export function Languages() {
    const [showAddLanguage, setShowAddLanguage] = useState(false)
    const [languages, setLanguages] = useState(["Javascript", "Typescript", "Kotlin", "Java"])

    function toggleAddLanguageButton() {
        setShowAddLanguage(!showAddLanguage)
    }

    function addLanguage() {
        const languageToAdd = "React"
        const newLanguagesArr = [...languages, languageToAdd]
        setLanguages(newLanguagesArr)
    }

    return (
        <div>
            <button onClick={toggleAddLanguageButton}>Toggle add language</button>
            {showAddLanguage ? <button onClick={addLanguage}>Add language</button> : null}
            <ul>
                {languages.map((language, index) => <li key={index}>{language}</li>)}
            </ul>
        </div>
    )
}
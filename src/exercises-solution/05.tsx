import React, {useState} from "react";

export function Languages() {
    const [showAddLanguage, setShowAddLanguage] = useState(false)
    const [languages, setLanguages] = useState(["Javascript", "Typescript", "Kotlin", "Java"])

    function toggleAddLanguageButton() {
        setShowAddLanguage(!showAddLanguage)
    }

    return (
        <div>
            <button onClick={toggleAddLanguageButton}>Toggle add language</button>
            {showAddLanguage ? <button>Add language</button> : null}
            <ul>
                {languages.map((language, index) => <li key={index}>{language}</li>)}
            </ul>
        </div>
    )
}
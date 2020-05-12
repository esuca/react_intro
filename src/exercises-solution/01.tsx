import React, {useState} from "react";

export function Toggle() {
    const [isActive, setIsActive] = useState(false)

    function handleClick() {
        setIsActive(!isActive)
    }

    return (
        <div>
            <button onClick={handleClick}>Toggle</button>
            <span>{isActive ? "on" : "off"}</span>
        </div>
    );
}
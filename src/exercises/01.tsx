import React from "react";
import "@testing-library/jest-dom/extend-expect";

// const [value, setValue] = useState(valorInicial)
export function Toggle() {
    return (
        <div>
            <button>Toggle</button>
            <span>off</span>
        </div>
    );
}
import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
// import {Toggle} from "../exercises-solution/01";

// const [value, setValue] = useState(valorInicial)
function Toggle() {
    return (
        <div>
            <button>Toggle</button>
            <span>off</span>
        </div>
    );
}

describe.skip("01. State", () => {
    test("como usuario debería poder ver 'off' cuando cargue el componente", () => {
        render(<Toggle />);

        expect(screen.getByText("off")).toBeInTheDocument();
    });

    test("como usuario debería poder ver 'on' cuando haga click en 'Toggle'", () => {
        render(<Toggle />);

        userEvent.click(screen.getByText("Toggle"));
        expect(screen.getByText("on")).toBeInTheDocument();
    });

})

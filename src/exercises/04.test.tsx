import React, {useState} from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
// import { Counter, useCounter } from "../exercises-solution/04";

// El hook debe devolver un objeto que tenga { countValue, handleIncrement, handleDecrement }
function useCounter(initialCountValue?: number) {

    return { /*TODO ...*/}
}

interface Props {
    initialCountValue?: number
}

// Después de mover la lógica de Counter al hook useCounter, podemos usar el hook como una función más
// const { countValue, handleIncrement, handleDecrement } = useCounter()
function Counter(props: Props) {
    const [countValue, setCountValue] = useState(props.initialCountValue || 0)

    function handleIncrement() {
        setCountValue(countValue + 1)
    }

    function handleDecrement() {
        setCountValue(countValue - 1)
    }

    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <span>Count: {countValue}</span>
            <button onClick={handleDecrement} disabled={countValue === 0}>
                Decrement
            </button>
        </div>
    );
}

// Son los tests del fichero 03.test.tsx, deben seguir pasando.
describe.skip("04. Custom hooks", () => {
    test("como usuario quiero ver 'Count: 0' cuando se renderize el componente por primera vez", () => {
        render(<Counter />);

        expect(screen.getByText("Count: 0")).toBeInTheDocument();
    });

    test("como usuario quiero poder incrementar en 1 'countValue' cuando haga click en 'Increment'", () => {
        render(<Counter />);

        userEvent.click(screen.getByText("Increment"));
        expect(screen.getByText("Count: 1")).toBeInTheDocument();
    });

    test("como desarrollador quiero deshabilitar el botón 'Decrement' si 'countValue' es 0", () => {
        render(<Counter />);

        expect(screen.getByText("Decrement")).toBeDisabled();
    });

    test("como usuario quiero poder decrementar en 1 'countValue' cuando haga click en 'Decrement'", () => {
        render(<Counter />);

        userEvent.click(screen.getByText("Increment"));
        userEvent.click(screen.getByText("Decrement"));
        expect(screen.getByText("Count: 0")).toBeInTheDocument();
    });

    test("como desarrollador quiero poder cambiar el valor inicial de count usando la prop 'initialCountValue'", () => {
        // OJO la prop es opcional
        render(<Counter initialCountValue={1} />);

        expect(screen.getByText("Count: 1")).toBeInTheDocument();
    });
})
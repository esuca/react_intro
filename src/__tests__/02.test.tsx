import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import {Button} from "../exercises/02";

describe.skip("02. Props", () => {
    test("como desarrollador quiero que se llame a la prop 'onClick' cuando se haga click en el botón", () => {
        const handleClick = jest.fn();

        render(<Button onClick={handleClick}>Click me!</Button>);
        userEvent.click(screen.getByText("Click me!"));

        expect(handleClick).toHaveBeenCalled();
    });

// Cuando el test funcione, se va a romper el anterior... corregirlo :D
    test("como desarrollador debería poder cambiar el contenido de button", () => {
        render(<Button>Save</Button>);

        expect(screen.getByText("Save")).toBeInTheDocument();
    });

    test("como usuario debería ver el botón deshabilitado cuando la prop 'isLoading' sea true", () => {
        // OJO la prop 'isLoading' es OPCIONAL
        render(<Button isLoading={true}>Save</Button>);

        expect(screen.getByText("Save")).toBeDisabled();
    });
})

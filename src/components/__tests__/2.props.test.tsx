import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

// Antes de empezar
// Recordar que, la etiqueta button acepta el evento 'onClick' que se dispara al hacer click
// y también tiene un atributo 'disabled' que cuando es 'true' deshabilita el botón

// 1 Paso: Tipar las props correctamente

function Button(props: any) {
  return <button>Click me!</button>;
}

test.skip("como desarrollador quiero que se llame a la prop 'onClick' cuando se haga click en el botón", () => {
  const handleClick = jest.fn();

  render(<Button onClick={handleClick} />);
  userEvent.click(screen.getByText("Click me!"));

  expect(handleClick).toHaveBeenCalled();
});

// Cuando el test funcione, se va a romper el anterior... corregirlo :D
test.skip("como desarrollador debería poder cambiar el contenido de button", () => {
  render(<Button>Save</Button>);

  expect(screen.getByText("Save")).toBeInTheDocument();
});

test.skip("como usuario debería ver el botón deshabilitado cuando la prop 'isLoading' sea true", () => {
  // OJO la prop 'isLoading' es OPCIONAL
  render(<Button isLoading={true}>Save</Button>);

  expect(screen.getByText("Save")).toBeDisabled();
});
// BONUS: La prop cuando no se pasa tenga un valor por defecto: false !

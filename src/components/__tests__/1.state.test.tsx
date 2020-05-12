import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

// Antes de empezar
// Recordar que, la etiqueta button acepta el evento 'onClick' que se dispara al hacer click

function Toogle() {
  return (
    <div>
      <button>Toggle</button>
      <span>off</span>
    </div>
  );
}

test.skip("como usuario debería poder ver 'off' cuando cargue el componente", () => {
  render(<Toogle />);

  expect(screen.getByText("off")).toBeInTheDocument();
});

test.skip("como usuario debería poder ver 'on' cuando haga click en 'Toggle'", () => {
  render(<Toogle />);

  userEvent.click(screen.getByText("Toggle"));
  expect(screen.getByText("on")).toBeInTheDocument();
});

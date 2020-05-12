import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

function Counter(props: any) {
  const countValue = 0;

  function handleIncrement() {
    // Todo
  }

  function handleDecrement() {
    // todo
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

test.skip("como usuario quiero ver 'Count: 0' cuando se renderize el componente por primera vez", () => {
  render(<Counter />);

  expect(screen.getByText("Count: 0")).toBeInTheDocument();
});

test.skip("como usuario quiero poder incrementar en 1 'countValue' cuando haga click en 'Increment'", () => {
  render(<Counter />);

  userEvent.click(screen.getByText("Increment"));
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});

test.skip("como desarrollador quiero deshabilitar el botón 'Decrement' si 'countValue' es 0", () => {
  render(<Counter />);

  expect(screen.getByText("Decrement")).toBeDisabled();
});

test.skip("como usuario quiero poder decrementar en 1 'countValue' cuando haga click en 'Decrement'", () => {
  render(<Counter />);

  userEvent.click(screen.getByText("Increment"));
  userEvent.click(screen.getByText("Decrement"));
  expect(screen.getByText("Count: 0")).toBeInTheDocument();
});

test.skip("como desarrollador quiero poder cambiar el valor inicial de count usando la prop 'initialCount'", () => {
  // OJO la prop es opcional
  render(<Counter initialCount={1} />);

  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});

/* 
  Nuevos requisitos:

  - Abstraer la lógica del componente a un custom hook llamado 'useCounter'

*/

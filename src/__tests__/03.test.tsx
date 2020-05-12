import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import {Counter} from "../exercises/03";

describe.skip("03. Review State & Props", () => {
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

  /*
    Nuevos requisitos:

    - Abstraer la lógica del componente a un custom hook llamado 'useCounter'

  */

})
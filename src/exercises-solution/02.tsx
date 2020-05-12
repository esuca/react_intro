import React, {PropsWithChildren} from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

interface ButtonProps {
    onClick?: () => void
    isLoading?: boolean
}

export function Button(props: PropsWithChildren<ButtonProps>) {
    return <button onClick={props.onClick} disabled={props.isLoading}>{props.children}</button>;
}

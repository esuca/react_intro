import React, {useReducer} from 'react'
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
// import {Counter} from "../exercises-solution/reducer.test";

interface CountState {
    count: number
}

const initialState: CountState = {count: 0};

function countReducer(state: CountState, action: any) {
    switch (action.type) {
        case 'increment': {
            return {count: state.count + 1}
        }
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(countReducer, initialState);

    function handleIncrement() {

    }

    function handleDecrement() {

    }

    function handleReset() {

    }

    return (
        <>
            Count: {state.count}
            <button onClick={handleDecrement}>Increment</button>
            <button onClick={handleIncrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}


describe.skip("React.useReducer hook", () => {
    it('incrementa en 1 "count" al pulsar en "Increment"', function () {
       render(<Counter />)

        userEvent.click(screen.getByText("Increment"));
        expect(screen.queryByText("Count: 1")).toBeInTheDocument();
    });

    it('decrementa en 1 "count" al pulsar en "Decrement"', function () {
        render(<Counter />)

        userEvent.click(screen.getByText("Decrement"));
        expect(screen.queryByText("Count: -1")).toBeInTheDocument();
    });

    it('resetea a 0 "count" al pulsar en "Reset"', function () {
        render(<Counter />)

        userEvent.click(screen.getByText("Increment"));
        userEvent.click(screen.getByText("Reset"));

        expect(screen.queryByText("Count: 0")).toBeInTheDocument();
    });
})
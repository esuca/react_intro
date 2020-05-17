import React, {useReducer} from "react";

interface CountState {
    count: number
}

export const initialState: CountState = {count: 0};

export function countReducer(state: CountState, action: any) {
    switch (action.type) {
        case 'increment': {
            return {count: state.count + 1}
        }
        case 'decrement': {
            return {count: state.count - 1}
        }
        case 'reset': {
            return {count: 0}
        }
        default:
            throw new Error();
    }
}

export function Counter() {
    const [state, dispatch] = useReducer(countReducer, initialState);

    function handleIncrement() {
        dispatch({type: 'increment'})
    }

    function handleDecrement() {
        dispatch({type: 'decrement'})
    }

    function handleReset() {
        dispatch({type: 'reset'})
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

import React, {useState} from "react";

interface Props {
    initialCountValue?: number
}

export function Counter(props: Props) {
    const {countValue, handleIncrement, handleDecrement} = useCounter()

    return (
        <div>
            <button onClick={handleDecrement} disabled={countValue === 0}>
                Decrement
            </button>
            <span>Count: {countValue}</span>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}

export function useCounter(initialCountValue?: number) {
    const [countValue, setCountValue] = useState(0)

    function handleIncrement() {
        setCountValue(countValue + 1)
    }

    function handleDecrement() {
        setCountValue(countValue - 1)
    }

    return {countValue, handleDecrement, handleIncrement}
}
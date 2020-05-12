import React, {useState} from "react";

interface Props {
    initialCountValue?: number
}

export function Counter(props: Props) {
    const {countValue, handleIncrement, handleDecrement} = useCounter(props.initialCountValue)

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

function useCounter(initialCountValue?: number) {
    const [countValue, setCountValue] = useState(initialCountValue || 0)

    function handleIncrement() {
        setCountValue(countValue + 1)
    }

    function handleDecrement() {
        setCountValue(countValue - 1)
    }

    return { countValue, handleIncrement, handleDecrement }
}
import React, {useState} from "react";
import "@testing-library/jest-dom/extend-expect";

interface Props {
  initialCountValue?: number
}

export function Counter(props: Props) {
  const [countValue, setCountValue] = useState(0)

  function handleIncrement() {
    // Todo
  }

  function handleDecrement() {
    // Todo
  }

  return (
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <span>Count: {countValue}</span>
        <button onClick={handleDecrement}>
          Decrement
        </button>
      </div>
  );
}

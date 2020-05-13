import * as React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Toggle />
    </div>
  );
}

function Toggle() {
    const isActive = 0
    return (
        <div>
            <button>Toggle</button>
            <span>{isActive ? "on" : "off"}</span>
        </div>
    );
}
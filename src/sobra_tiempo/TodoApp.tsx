import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

export function TodoApp() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<Todo[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function addTask() {
    const newItem: Todo = {
      id: Date.now(),
      text: text
    };
    setItems(prevItems => [...prevItems, newItem]);
  }

  return (
    <div>
      <label htmlFor="todo-input" />
      <input id="todo-input" type="text" value={text} onChange={handleChange} />
      <button onClick={addTask} />
      <ul>
        {items.map(todo => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import { Todo } from "./todo";
import { TodoType } from "./Types/Todo";
import { Text } from "./Text";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType[]>>([]);

  const onClickFetchData = () => {
    axios
      .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <Text color="red" fontSize="30px"></Text>
      <button onClick={onClickFetchData}>データの取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

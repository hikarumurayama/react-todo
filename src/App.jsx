import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { UncompleteTodo } from "./components/UncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううう"]);
  const [todoText, setTodoText] = useState("");

  const onChangeText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") {
      return;
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const todos = [...incompleteTodos];
    todos.splice(index, 1); //index番目からプラス1番目の間にある要素を削除
    setIncompleteTodos(todos);
  };

  const onClickComplete = (index) => {
    const todos = [...incompleteTodos];
    const completedTodos = [...completeTodos, todos[index]];
    setCompleteTodos(completedTodos);
    todos.splice(index, 1);
    setIncompleteTodos(todos);
  };

  const onClickBack = (index) => {
    const todos = [...completeTodos];
    const incompletedTodos = [...incompleteTodos, todos[index]];
    setIncompleteTodos(incompletedTodos);
    todos.splice(index, 1);
    setCompleteTodos(todos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeText}
        onClick={onClickAdd}
      />
      <UncompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

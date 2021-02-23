import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";

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
      {/* <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div> */}

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
                {/* 関数が即時実行されないようにアロー関数にする */}
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key="todo" className="list-row">
                <li>{todo}</li>
                <button
                  onClick={() => {
                    onClickBack(index);
                  }}
                >
                  戻す
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
};

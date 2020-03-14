import React from "react";
import TodoItem from "./TodoItem/index";

const TodoList = ({ items, deleteItem }) => {
  console.log(items);

  const task =
    Object.keys(items).length === 0
      ? "No hay tareas en la lista"
      : "Administra aqui las tareas";
  return (
    <div>
      <h2>{task}</h2>
      <ul>
        {items.map(item => (
          <TodoItem
            key={item.id}
            id={item.id}
            name={item.name}
            deleteItem={deleteItem}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

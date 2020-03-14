import React from "react";

const TodoItem = ({ id, name, deleteItem }) => {
  const _deleteItem = () => {
    deleteItem(id);
  };
  return (
    <li>
      {name}
      <button id="delete" onClick={_deleteItem}>
        Eliminar Tarea
      </button>
    </li>
  );
};

export default TodoItem;

import React from "react";
import classes from "./todo.module.css";
import { FaTrash, FaCheck,FaEdit } from "react-icons/fa";
import { TodoType } from "../../types/types";

interface TodoPropsType {
  todo: TodoType;
  changeClass: (arg, arg2) => void;
  removeTodo: (arg) => void;
  updateTodo: (arg) => void;
}

const Todo: React.FC<TodoPropsType> = ({ todo, changeClass, removeTodo, updateTodo }) => {
  return (
    <div className={todo["completed"] ? classes.todoCompleted : classes.todo}>
      <li className={classes.todoItem}>{todo["title"]}</li>
      {/* button completed todo */}
      <button
        className={classes.completeBtn}
        onClick={() => {
          changeClass(todo, !todo["completed"]);
        }}
      >
        <span className={classes.faEdit}>
          <FaCheck />
        </span>
      </button>

      {/* button edit todo */}
      <button
        className={classes.editBtn}
        onClick={() => {
          updateTodo(todo);
        }}
      >
        <span className={classes.faTrash}>
          <FaEdit />
        </span>
      </button>

      {/* button delete todo */}
      <button
        className={classes.trashBtn}
        onClick={() => {
          removeTodo(todo);
        }}
      >
        <span className={classes.faTrash}>
          <FaTrash />
        </span>
      </button>
    </div>
  );
};

export default Todo;



import React from "react";
import classes from "./todoList.module.css";
import Todo from "../Todo/Todo";
import { TodoType } from "../../types/types";

interface TodoListPropsType {
  todos: TodoType[];
  changeClass: (arg, arg2) => void;
  removeTodo: (arg) => void;
  updateTodo: (arg) => void;
}

const TodoList: React.FC<TodoListPropsType> = ({
  todos,
  changeClass,
  removeTodo,
  updateTodo
}) => {
  return (
    <div className={classes.todoContainer}>
      <ul className={classes.todoList}>
        {todos &&
          todos.map((todo, index) => (
            <Todo
              key={index}
              changeClass={changeClass}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
              todo={todo}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;

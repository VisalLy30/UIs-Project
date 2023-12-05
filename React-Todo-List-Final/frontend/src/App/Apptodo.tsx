import React, { useState, useEffect } from "react";
import Title from "../components/Title/Title";
import Form from "../components/Form/Form";
import TodoList from "../components/TodoList/TodoList";
import classes from "./app.module.css";
import { TodoType } from "../types/types";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "../components/login/Login";
import Register from "../components/Register/Register";
import Setpassword from "../components/Setpassword/Setpassword";
import Email from "../components/Setpassword/Email";
import VerifyEmail from "../components/verify_email/verifyemail";
import Message from "../components/Register/message"
import axios from "axios";

function App() {

  const getTodo = () =>{
    axios.get('http://localhost:8000/api/todo').then(response =>{ 
      const data = response.data;
      setTodos(data);
    })
  }

  useEffect(()=>getTodo(),[]);
  // Todos
  let [todos, setTodos] = useState<TodoType[]>([]);

  // Selected Filter
  let [selectedFilter, setSelectedFilter] = useState("all");
  let todosToShow: TodoType[] = [];

  if (selectedFilter === "completed") {
    todosToShow = todos.filter((item) => item["completed"] === true);
  } else if (selectedFilter === "incomplete") {
    todosToShow = todos.filter((item) => item["completed"] === false);
  } else {
    todosToShow = todos;
  }

  // Add Todo
  const addTodo = (todo) => {
    axios.post('http://localhost:8000/api/todo',todo).then((response) => {
      const todo_re = response.data;
      setTodos([...todos, todo_re]);
    })
  };

  // Remove Todo
  const removeTodo = (todo) => {
    axios.delete('http://localhost:8000/api/todo/'+todo.id).then((response) => {
      const newTodos = todos.filter((item) => item !== todo);
      setTodos(newTodos);
    })
  };

  //Update Todo
  const updateTodo = (todo) => {
    //console.log(todo);
    
  }

  // ChangeClass
  const changeClass = (todo, value) => {
     todo.completed = true;
     axios.put('http://localhost:8000/api/todo/'+todo.id, todo).then((response) => {
      const newTodos = todos.map((item) => {
        if (item === todo) {
          return { ...item, completed: value };
        } else {
          return item;
        }
      });
  
      setTodos(newTodos);
     })
   
  };
  // Apply Filter
  const applyFilter = (value) => {
    setSelectedFilter(value);
  };


  return (
    
      <Router>        
                <Route path="/Apptodo">
                  <div className={classes.container}>
                      <header className={classes.header}>
                          <Title value="Todo List" />
                      </header>
                      <Form addTodo={addTodo} applyFilter={applyFilter} />
                      <TodoList
                        todos={todosToShow}
                        changeClass={changeClass}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                      />
                  </div>
                </Route>
                <Route path="/Register">
                  <Register />
                </Route>
                <Route path="/Setpassword/:uid/:token/">
                  <Setpassword />
                </Route>
                <Route path="/Email">
                  <Email />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/verify-email/:key">
                  <VerifyEmail />
                </Route>
                <Route path="/message">
                  <Message />
                </Route>
      </Router>
    
  );
}

export default App;

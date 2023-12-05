import classes from "./formButton.module.css";
import { FaPlusSquare } from "react-icons/fa";
import React from "react";

const FormButton = () => {
  return (
    //button add filed todo
    <button className={classes.todoBtn} type="submit">
      <FaPlusSquare />
    </button>
  );
};

export default FormButton;

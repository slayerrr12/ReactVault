import React, { useState } from "react";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";
import Button from "../UI/Button.js";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    console.log(enteredName);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    console.log(enteredAge);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
  };
  const  onSubmitHandler = (event) =>{
    event.preventDefault();
    console.log("clickeed")
    setEnteredName('');
    setEnteredAge('');


  }

  
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onInput={nameChangeHandler} value={enteredName} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onInput={ageChangeHandler} value={enteredAge} />
        <Button type="submit" onClick = {onSubmitHandler}>Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;

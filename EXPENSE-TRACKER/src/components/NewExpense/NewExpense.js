import React, { useState } from "react";

import AddExpenseButton from "./AddExpenseButton";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [wantToAddExpense , setwantToAddExpense ] = useState(false)

  const proceedToForm = () => {
    setwantToAddExpense(true)
  }
  const onCancelFormButton = () => {
    setwantToAddExpense(false)
  }
  
  


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  //

  return (
    <div className='new-expense'>
      
      {(!(wantToAddExpense))&&<AddExpenseButton  proceedToForm = { proceedToForm}/>}
      {wantToAddExpense&&<ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}  onCancel = {onCancelFormButton}/>}
    </div>
    
  );
};

export default NewExpense;

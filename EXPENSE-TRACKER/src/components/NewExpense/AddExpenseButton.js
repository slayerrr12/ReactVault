import React from "react";
import './ExpenseForm.css';





function AddExpenseButton(props) {
   
    

    const proceedToForm = ()=>{
          
        props.proceedToForm()
    }
   
    return(
        <div className='new-expense__actions'>
        <button onClick={proceedToForm}>Add Expense</button>
      </div>
    )

    
}

export default AddExpenseButton
import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = props.items.filter((expense) => {
    if (filteredYear === "All Expense") {
      return true;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });

  if (filteredExpenses.length === 0) {
    filteredExpenses = <p>NO ITEMS </p>
    console.log(filteredExpenses)

  }
  else {
    filteredExpenses = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }






  console.log(props.items);

  return (
    // dynamic rendering
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses}
    </Card>
  );
};

export default Expenses;

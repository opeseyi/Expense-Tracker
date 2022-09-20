import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = function ({ onAddExpense }) {
  const [isEditing, setIsEditing] = useState(false);
  function saveExpenseDataHandler(enderedExpenseData) {
    const expenseData = {
      ...enderedExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    onAddExpense(expenseData);
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
      {/* <button onClick={buttonHanler}>Add Expenses</button> */}
      {/* <button>Cancel</button> */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = function ({ onAddExpense }) {
  function saveExpenseDataHandler(enderedExpenseData) {
    const expenseData = {
      ...enderedExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

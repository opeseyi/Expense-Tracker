import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 300,
      date: new Date(2021, 8, 15),
    },
    { id: "e2", title: "New TV", amount: 1700, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 890,
      date: new Date(2022, 9, 15),
    },
    { id: "e4", title: "New Desk", amount: 450, date: new Date(2023, 4, 11) },
  ];

  const addExpenseHandler = function (expenseData) {
    console.log("In App.js");
    console.log(expenseData);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses arr={expense} />
    </div>
  );
}

export default App;

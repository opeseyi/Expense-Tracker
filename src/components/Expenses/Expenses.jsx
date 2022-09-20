import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";
import "./Expenses.css";
function Expenses({ arr }) {
  const [filterYear, setFilterYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    // console.log("Expenses.jsx");
    setFilterYear(selectedYear);
  }

  const filterExpense = arr.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expenseContent = <p>No expense found</p>;

  if (filterExpense.length > 0) {
    expenseContent = filterExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filterExpense} />
        <ExpensesList items={filterExpense} />
      </Card>
    </div>
  );
}

export default Expenses;

import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses({ arr }) {
  const [filterYear, setFilterYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    console.log("Expenses.jsx");
    setFilterYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={arr[0].title}
          amount={arr[0].amount}
          date={arr[0].date}
        />
        <ExpenseItem
          title={arr[1].title}
          amount={arr[1].amount}
          date={arr[1].date}
        />
        <ExpenseItem
          title={arr[2].title}
          amount={arr[2].amount}
          date={arr[2].date}
        />
        <ExpenseItem
          title={arr[3].title}
          amount={arr[3].amount}
          date={arr[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;

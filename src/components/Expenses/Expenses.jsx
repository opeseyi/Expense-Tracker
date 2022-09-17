import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses({ arr }) {
  return (
    <Card className="expenses">
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
  );
}

export default Expenses;

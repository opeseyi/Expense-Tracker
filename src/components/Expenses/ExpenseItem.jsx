import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  // const [tittle, setTittle] = useState(title);

  // const clickeHandler = function () {
  //   setTittle("updated");
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        {/* <button onClick={clickeHandler}>Change Tittle</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;

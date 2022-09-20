import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = function ({ onSaveExpenseData, onCancel }) {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  function titleChangeHandler(eventObj) {
    setEnterTitle(eventObj.target.value);
  }

  function amountChangeHandler(eventObj) {
    setEnterAmount(eventObj.target.value);
  }

  function dateChangeHandler(eventObj) {
    setEnterDate(eventObj.target.value);
  }

  const submitHandler = function (eventObj) {
    eventObj.preventDefault();

    const expense = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };

    onSaveExpenseData(expense);
    setEnterDate("");
    setEnterAmount("");
    setEnterTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tittle</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Camcel
        </button>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

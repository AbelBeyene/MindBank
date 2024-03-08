import React from "react";
import { useState } from "react";
import ExpenseDate from "../ExpenseDate";
const NewExpenseForm = (props) => {
  const [title, setTitle] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();

  const titleHandler = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    props.onSaveExpenseData(expenseData);
  };

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className="bg-purple-400 p-10 m-48 mb-2 mt-3 
      rounded-2xl shadow-lg overflow-auto"
      >
        <div id="parentOfTitleandAmount" className="flex flex-row space-x-9">
          <div className="flex flex-col">
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              id="Title"
              className="rounded-lg w-56 h-7"
              onChange={titleHandler}
              value={title}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Amount">Amount</label>
            <input
              type="text"
              id="Amount"
              className="rounded-lg w-56 h-7"
              onChange={amountHandler}
              value={amount}
            />
          </div>
        </div>
        <div className="mt-5 flex flex-col">
          <label htmlFor="Date">Date</label>
          <input
            type="Date"
            id="Date"
            className="rounded-lg w-56 h-7"
            onChange={dateHandler}
            value={date}
          />
        </div>
        <div className="flex flex-row justify-end">
          <button
            type="submit"
            className="px-4 py-3 text-white font-semibold bg-purple-700 rounded-2xl"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseForm;

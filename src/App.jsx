import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSE = [
  {
    id: 1,
    title: "car",
    cost: 3254,
    date: new Date(2024, 6, 6),
  },
  {
    id: 2,
    title: "jacket",
    cost: 3254,
    date: new Date(2024, 6, 6),
  },
  {
    id: 3,
    title: "con",
    cost: 3254,
    date: new Date(2024, 6, 6),
  },
  {
    id: 4,
    title: "shoe",
    cost: 3254,
    date: new Date(2024, 6, 6),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expenseData) => {
    console.log("we are excuting this on App");
    console.log(expenseData);
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };
  return (
    <div>
      <div className="text-2xl flex mt-4 mb-4  bg-gray-800">
        Let's Get Started!{" "}
      </div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <div className="p-52 py-10  bg-gray-800">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            cost={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

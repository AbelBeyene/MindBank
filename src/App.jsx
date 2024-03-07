import React from "react";
import ExpenseItem from "./components/ExpenseItem";
const expenses = [
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
  return (
    <div>
      <div className="text-2xl flex mt-4 mb-4">Let's Get Started! </div>
      <div className="p-52 py-10  bg-gray-800">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            cost={expense.cost}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

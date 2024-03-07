import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="p-2 ">
      <div className="flex flex-row rounded-2xl bg-gray-500 p-6 justify-between text-black font-bold">
        <div className="space-x-5 flex flex-row">
          <div>
            <ExpenseDate date={props.date} />
          </div>

          <h1 className="text-white my-auto text-3xl">{props.title}</h1>
        </div>

        <div
          id="price"
          className="  px-5 py-2 my-6 text-white font-bold bg-purple-800 rounded-xl border border-2 "
        >
          ${props.cost}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;

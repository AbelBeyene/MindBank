import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      <div className="bg-gray-700 p-4 px-8 text-white border rounded-xl border-2">
        <div className="text-sm text-bold">{month}</div>
        <div className="text-sm ">{year}</div>
        <div className="text-2xl">{day}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;

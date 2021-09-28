import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if(props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>No found expenses</h2>
    }
  if (props.items.length > 0) {
    return (
      <ul>
        {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
        ))}
      </ul>
    );
  }
};
export default ExpensesList;

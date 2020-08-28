import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1> Expense List </h1>

    {props.expenses.map((expense) => {
      return (
        <ExpenseListItem
          key={expense.id}
          description={expense.description}
          amount={expense.amount}
          createdAt={expense.createdAt}
          id={expense.id}
        />
      );
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    // expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(ExpenseList);

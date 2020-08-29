import { v4 as uuidv4 } from "uuid";

import database from "../firebase/firebase";

// component call action generator
// action generator returns object
// component dispatches action that goes into reducer
// that reducer changes redux store

// asynchronous
// components call action generator
// action generator returns func
// component dispatches func
// that func runs (has ability to dispatch other actions)

// Action Generator -- expenses
// ADD EXPENSE
export const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    expense: expense,
  };
};

export const startAddExpense = (expenseDate = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseDate;

    const expense = { description, note, amount, createdAt };

    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

// REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id: id,
  };
};

// EDITING EXPENSE
export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id: id,
    updates: updates,
  };
};

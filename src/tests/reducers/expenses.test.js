import expensesReducer from "../../reducers/expenses";

import expenses from "../fixtures/expenses";

// defualt expense reducer
test("should set defualt state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

// remove expense by id
test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

// remove expense by id
test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should add an expense
test("should add an expense", () => {
  const expense = {
    id: "3",
    description: "cell phone",
    note: "",
    amount: 3201,
    createdAt: 20000,
  };

  const action = {
    type: "ADD_EXPENSE",
    expense: expense,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// should edit an exp
test("should edit an expense with the id", () => {
  const amount = 205;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: {
      amount: amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

// should not edit exp if exp not found
test("should not edit an expense if id not found", () => {
  const amount = 205;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount: amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

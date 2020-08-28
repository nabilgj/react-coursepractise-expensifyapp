import React from "react";
import ReactDOM from "react-dom";

import "react-dates/initialize";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";

import configureStore from "./store/configureStore";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

// addExpense --> Water Bill
store.dispatch(addExpense({ description: "Water Bill", amount: 4500 }));
// addExpense --> Gas Bill
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));

store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

// getVisibleExpense --> print visible to screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

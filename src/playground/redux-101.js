import { createStore } from "redux";

// const add = ({ a, b }) => {
//   return a + b;
// };
// console.log(add({ a: 1, b: 2 }));

// series of functions:
// action generators are func that returns action objects
const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy: incrementBy,
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy: decrementBy,
  };
};

const setCount = ({ count }) => ({
  type: "SET",
  count: count,
});

const resetCount = () => ({
  type: "RESET",
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };

    case "SET":
      return {
        count: action.count,
      };

    case "RESET":
      return {
        count: 0,
      };

    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

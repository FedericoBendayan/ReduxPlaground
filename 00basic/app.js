const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function counter(state=0, action) {
  switch (action.type) {
    case INCREMENT: 
      return state + action.value;
    case DECREMENT:
      return state - action.value;
    default:
      return state;
  }
}


let store = Redux.createStore(counter)

const increment = (value) => {
  return { type: INCREMENT, value: value };
}

const decrement = (value) => {
   return { type: DECREMENT, value: value };
}

console.log(store.getState())
store.dispatch(increment(1))
console.log(store.getState())
store.dispatch(increment(2))
console.log(store.getState())
store.dispatch(decrement(3))
console.log(store.getState())



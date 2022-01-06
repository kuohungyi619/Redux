// Get State from the Redux Store

// Practice:

// Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState.

const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  let currentState = store.getState();
// Copy an Object with Object.assign

// Practice:

// The Redux state and actions were modified to handle an object for the state. Edit the code to return a new state object for actions with type ONLINE, which set the status property to the string online. Try to use Object.assign() to complete the challenge.

const defaultState = {
    user: "CamperBot",
    status: "offline",
    friends: "732,982",
    community: "freeCodeCamp"
  };
  
  const immutableReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ONLINE":
        // to enforce state immutability, return a new state object using Object.assign() method
        return Object.assign({}, state, { status: "online" });
      default:
        return state;
    }
  };
  
  const wakeUp = () => {
    return {
      type: "ONLINE"
    };
  };
  
  const store = Redux.createStore(immutableReducer);
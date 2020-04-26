import { createStore, combineReducers } from "redux";
import { connect } from "react-redux";

const reducer1 = (state = {}, action) => {
  console.log("reducer1: " + JSON.stringify(action));
  switch (action.type) {
    case "REDUCER1_EVENT1":
      return {
	...state,
	id: action.id,
	date: new Date()
      }
    default:
      return state;
}
}
const reducer2 = (state = {}, action) => {
  console.log("reducer2: " + JSON.stringify(action));
  switch (action.type) {
    case "REDUCER2_EVENT1":
      return {
	...state,
	value1: action.value1,
	date: new Date()
      }
    default:
      return state;
}
}

const reduxStore = createStore(combineReducers({reducer1, reducer2}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default reduxStore;

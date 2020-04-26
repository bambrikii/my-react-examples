import { createStore, combineReducers } from "redux";
import {reducer as formReducer} from "redux-form";

function myReduxFormReducer(state = {}, action) {
  console.log("myReduxFormReducer: \n" + action.type + "\n" + JSON.stringify(state, null, 1));
  switch (action.type) {
    case "FORM_ACTION1":
      return {...state, field1: "action1 " + new Date()};
    case "MY_REDUX_ACTION_TYPE":
      return {
	... state,
	submitTime: new Date()
      };
    default:
      return {...state, field1: "noAction " + new Date()}
}
}

const myReduxFormStore = createStore(
	combineReducers({
	  myReduxFormReducer,
	  form: formReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

export default myReduxFormStore;

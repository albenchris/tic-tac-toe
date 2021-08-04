import { combineReducers } from "redux";

//initialiaze the function with two arguments
const ProcessReducer = (state = {}, action) => {
    switch (action.type) {
        //returns updated state
        case "PROCESS":
            return { ...action.payload };
        //else the current state is retained
        default:
            return state;
    }
};

// define the object and call the action
const rootReducers = combineReducers({
  ProcessReducer: ProcessReducer,
});

// else return default root reducer
export default rootReducers;
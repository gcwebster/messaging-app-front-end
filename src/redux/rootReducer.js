import { combineReducers } from "redux";

import counterReducer from "./Counter/counter.reducer";
import messageReducer from "./Messages/message.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  messages: messageReducer,
});

export default rootReducer;

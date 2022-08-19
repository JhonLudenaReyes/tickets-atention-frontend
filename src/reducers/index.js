import { combineReducers } from "redux";
import ticketReducer from "./ticketReducer";
import atentionReducer from "./atentionReducer";

export default combineReducers({
  ticket: ticketReducer,
  atention: atentionReducer,
});

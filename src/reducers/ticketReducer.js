import {
  SAVE_TICKET,
  LIST_TICKETS,
  CHANGE_STATE,
  SET_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET,
  UPDATE_ATENTION,
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  verification: false,
  stateAtention: false,
  tickets: [],
  ticket: {},
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TICKET:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case LIST_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    case CHANGE_STATE:
      return {
        ...state,
        verification: action.payload,
      };
    case SET_TICKET:
      return {
        ...state,
        ticket: action.payload,
      };
    case UPDATE_TICKET:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case DELETE_TICKET:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case UPDATE_ATENTION:
      return {
        ...state,
        stateAtention: !isEmpty(action.payload),
      };
    default:
      return state;
  }
};

export default ticketReducer;

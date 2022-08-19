import {
  LIST_ATENTION,
  SET_IDTICKET,
  SAVE_ATENTION,
  CHANGE_STATE,
  HISTORIAL_ATENTION,
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  verification: false,
  tickets: [],
  idTicket: null,
  historial: [],
};

const atentionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ATENTION:
      return {
        ...state,
        tickets: action.payload,
      };
    case SET_IDTICKET:
      return {
        ...state,
        idTicket: action.payload,
      };
    case SAVE_ATENTION:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case CHANGE_STATE:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case HISTORIAL_ATENTION:
      return {
        ...state,
        historial: action.payload,
      };
    default:
      return state;
  }
};

export default atentionReducer;

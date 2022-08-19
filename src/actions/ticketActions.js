import axios from "axios";

import {
  SAVE_TICKET,
  LIST_TICKETS,
  SET_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET,
  UPDATE_ATENTION,
} from "./types";

export const setTicket = (ticket) => (dispatch) => {
  dispatch({
    type: SET_TICKET,
    payload: ticket,
  });
};

export const getTickets = () => (dispatch) => {
  axios
    .get(`/tickets/list-tickets`)
    .then((res) => {
      dispatch({
        type: LIST_TICKETS,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

export const saveTicket = (ticket) => (dispatch) => {
  axios
    .post(`/tickets/save-ticket`, ticket)
    .then((res) => {
      dispatch({
        type: SAVE_TICKET,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

export const updateTicket = (ticket) => (dispatch) => {
  axios
    .put(`/tickets/update-ticket`, ticket)
    .then((res) => {
      dispatch({
        type: UPDATE_TICKET,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

export const deleteTicket = (idTicket) => (dispatch) => {
  axios
    .put(`/tickets/delete-ticket/${idTicket}`)
    .then((res) => {
      dispatch({
        type: DELETE_TICKET,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

export const changeTicketAtention = (idTicket) => (dispatch) => {
  axios
    .put(`/tickets/update-atencion/${idTicket}`)
    .then((res) => {
      dispatch({
        type: UPDATE_ATENTION,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

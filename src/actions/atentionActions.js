import axios from "axios";

import {
  LIST_ATENTION,
  SET_IDTICKET,
  SAVE_ATENTION,
  HISTORIAL_ATENTION,
} from "./types";

export const listAtention = () => (dispatch) => {
  axios
    .get(`/tickets/list-tickets-atention`)
    .then((res) => {
      dispatch({
        type: LIST_ATENTION,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

export const setIdTicket = (idTicket) => (dispatch) => {
  dispatch({
    type: SET_IDTICKET,
    payload: idTicket,
  });
};

export const saveAtention = (atention) => (dispatch) => {
  axios
    .post(`/historial/save-historial`, atention)
    .then((res) => {
      dispatch({
        type: SAVE_ATENTION,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

export const historialAtention = () => (dispatch) => {
  axios
    .get(`/historial-atencion/list-historial-atencion`)
    .then((res) => {
      dispatch({
        type: HISTORIAL_ATENTION,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

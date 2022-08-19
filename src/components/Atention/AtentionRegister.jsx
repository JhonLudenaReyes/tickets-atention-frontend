import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { saveAtention, listAtention } from "../../actions/atentionActions";
import { changeTicketAtention } from "../../actions/ticketActions";
import { changeState } from "../../actions/globalActions";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";

//REACT HOT TOAST
import toast, { Toaster } from "react-hot-toast";

const AtentionRegister = () => {
  //NOTIFICATIONS
  const notify = () =>
    toast.success("¡Atención de ticket registrado satisfactoriamente!");

  const idTicket = useSelector((state) => state.atention.idTicket);
  const verification = useSelector((state) => state.atention.verification);
  const dispatch = useDispatch();

  const [atention, setAtention] = useState({
    idTicket: idTicket,
    usuarioSoporte: "",
    fechaAtencion: new Date(),
    trabajoRealizado: "",
  });
  const [startDate, setStartDate] = useState(new Date());

  //IF VERIFICATION IS TRUE SHOW NOTIFICATION
  useEffect(() => {
    if (verification) {
      notify();
      //CHANGE INITIAL STATE IN THE STORE
      dispatch(changeState(false));
      dispatch(listAtention());
    }
  });

  const handleDateChange = (date) => {
    //console.log(date);
    setStartDate(date);
    setAtention({
      ...atention,
      fechaAtencion: date,
    });
  };

  const onChange = (e) => {
    setAtention({
      ...atention,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(atention);
    dispatch(saveAtention(atention));
    dispatch(changeTicketAtention(idTicket));
  };
  return (
    <>
      <Container>
        <h1>Formulario de atencion</h1>
        <h2>{`Atención de ticket # ${idTicket}.`}</h2>
        <hr />
        <Link
          onClick={() => {
            dispatch(listAtention());
          }}
          to="/atention/list-atention"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <i className="material-icons left">keyboard_backspace</i>
          Volver a lista de tickets
        </Link>
        <Form noValidate onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Usuario de soporte</Form.Label>
            <Form.Control
              id="usuarioSoporte"
              type="text"
              placeholder="Ingrese usuario"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha de atención</Form.Label>
            <DatePicker
              selected={startDate}
              //onSelect={handleDateSelect} //when day is clicked
              onChange={handleDateChange} //only when value has changed
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Trabajo realizado</Form.Label>
            <Form.Control
              id="trabajoRealizado"
              type="text"
              placeholder="Ingrese el trabajo realizado"
              onChange={onChange}
            />
          </Form.Group>
          <hr />
          <Button variant="primary" type="submit">
            Guardar los cambios
          </Button>
        </Form>
        <Toaster />
      </Container>
    </>
  );
};

export default AtentionRegister;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//GLOBAL ACTIONS
import { changeState } from "../../actions/globalActions";

import { saveTicket, updateTicket } from "../../actions/ticketActions";
import "./styles/TicketRegister.css";

//REACT HOT TOAST
import toast, { Toaster } from "react-hot-toast";

const ticketsDefault = {
  solicitante: "",
  fechaIngreso: new Date(),
  asunto: "",
  incidencia: "",
};

const TicketRegister = () => {
  //NOTIFICATIONS
  const notify = () => toast.success("¡Ticket guardado satisfactoriamente!");

  const [ticket, setTicket] = useState(ticketsDefault);
  const [startDate, setStartDate] = useState(new Date());

  const verification = useSelector((state) => state.ticket.verification);
  const getTicket = useSelector((state) => state.ticket.ticket);
  const dispatch = useDispatch();

  //IF VERIFICATION IS TRUE SHOW NOTIFICATION
  useEffect(() => {
    if (verification) {
      notify();
      //CHANGE INITIAL STATE IN THE STORE
      dispatch(changeState(false));
    }
  });

  useEffect(() => {
    if (getTicket.idTicket) {
      setTicket({
        ...ticket,
        solicitante: getTicket.solicitante,
        fechaIngreso: getTicket.fechaIngreso,
        asunto: getTicket.asunto,
        incidencia: getTicket.incidencia,
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTicket]);

  const handleDateChange = (date) => {
    //console.log(date);
    setStartDate(date);
    setTicket({
      ...ticket,
      fechaIngreso: date,
    });
  };

  const onChange = (e) => {
    setTicket({
      ...ticket,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(ticket);

    if (getTicket.idTicket) {
      const editTicket = {
        idTicket: getTicket.idTicket,
        solicitante: ticket.solicitante,
        fechaIngreso: ticket.fechaIngreso,
        asunto: ticket.asunto,
        incidencia: ticket.incidencia,
      };

      dispatch(updateTicket(editTicket));
    } else {
      dispatch(saveTicket(ticket));
    }
  };

  return (
    <>
      <Container className="ticketRegisterContainer">
        <Link
          //onClick={resetPerson}
          to="/ticket/list-tickets"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <i className="material-icons left">keyboard_backspace</i>
          Volver a lista de tickets
        </Link>
        <h2>
          <b>REGISTRO DE TICKETS</b>
        </h2>
        <Form noValidate onSubmit={onSubmit}>
          <Row>
            <Col>
              <FormGroup>
                <FormLabel>Solicitante</FormLabel>
                <FormControl
                  value={ticket.solicitante}
                  id="solicitante"
                  type="text"
                  placeholder="Ingrese su nombre"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Asunto</FormLabel>
                <FormControl
                  value={ticket.asunto}
                  id="asunto"
                  type="text"
                  placeholder="Ingrese el asunto "
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Fecha de ingreso</FormLabel>
                <DatePicker
                  selected={startDate}
                  //onSelect={handleDateSelect} //when day is clicked
                  onChange={handleDateChange} //only when value has changed
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Incidencia</FormLabel>
                <FormControl
                  value={ticket.incidencia}
                  id="incidencia"
                  type="text"
                  placeholder="Ingrese el comentario de la incidencia"
                  onChange={onChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <hr />
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
        <Toaster />
      </Container>
    </>
  );
};

export default TicketRegister;

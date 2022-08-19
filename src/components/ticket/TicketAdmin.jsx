import React from "react";
import { Container } from "react-bootstrap";
//import TicketRegister from "./TicketRegister";
import ListTickets from "./ListTickets";
import "./styles/TicketAdmin.css";

const TicketAdmin = () => {
  return (
    <>
      <Container className="ticketAdminContainer">
        <ListTickets />
      </Container>
    </>
  );
};

export default TicketAdmin;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import {
  getTickets,
  setTicket,
  deleteTicket,
} from "../../actions/ticketActions";
import { changeState } from "../../actions/globalActions";

import MaterialTable, { MTableToolbar } from "material-table";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const columns = [
  { title: "Solitante", field: "solicitante" },
  { title: "Fecha ingreso", field: "fechaIngreso" },
  { title: "Asunto", field: "asunto" },
  { title: "Incidencia", field: "incidencia" },
  { title: "Atencion", field: "atencion" },
];

const ListTickets = () => {
  const notify = () => toast.success("¡Eliminado satisfactoriamente!");
  const notifyCancel = () => toast("¡Sus datos no han sido eliminados!");
  const verification = useSelector((state) => state.ticket.verification);
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticket.tickets);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  useEffect(() => {
    if (verification) {
      notify();
      dispatch(changeState(false));
      dispatch(getTickets());
    }
  });

  const options = {
    actionsColumnIndex: -1,
  };

  const components = {
    Toolbar: (props) => (
      <>
        <MTableToolbar {...props} />
        <div style={{ padding: "0px 20px" }}>
          <Link
            //onClick={resetPerson}
            to="/ticket/ticket-register"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <i className="material-icons">add_circle</i>
          </Link>
        </div>
      </>
    ),
  };

  const actions = [
    {
      icon: "edit",
      tooltip: "Editar Ticket",
      onClick: (event, rowData) => {
        // Do save operation
        console.log(rowData);
        dispatch(setTicket(rowData));
        return navigate("/ticket/ticket-register");
      },
    },
    {
      icon: "delete",
      tooltip: "Eliminar Ticket",
      onClick: (event, rowData) => {
        // Do save operation
        let result = window.confirm(
          `¿Está seguro que desea eliminar ticket # ${rowData.idTicket} perteneciente a ${rowData.solicitante}?`
        );
        result ? dispatch(deleteTicket(rowData.idTicket)) : notifyCancel();
      },
    },
  ];

  return (
    <>
      <Container>
        <h1>LISTADO DE TICKETS</h1>
        <MaterialTable
          title="Tickets generados"
          columns={columns}
          data={tickets}
          actions={actions}
          options={options}
          components={components}
        />
        <Toaster />
      </Container>
    </>
  );
};

export default ListTickets;

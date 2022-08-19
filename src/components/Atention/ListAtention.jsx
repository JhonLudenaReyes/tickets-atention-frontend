import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listAtention, setIdTicket } from "../../actions/atentionActions";

const columns = [
  { title: "Solitante", field: "solicitante" },
  { title: "Fecha ingreso", field: "fechaIngreso" },
  { title: "Asunto", field: "asunto" },
  { title: "Incidencia", field: "incidencia" },
  { title: "Atencion", field: "atencion" },
];

const ListAtention = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.atention.tickets);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listAtention());
  }, [dispatch]);

  const options = {
    actionsColumnIndex: -1,
  };

  const actions = [
    {
      icon: "edit",
      tooltip: "Atender Ticket",
      onClick: (event, rowData) => {
        // Do save operation
        console.log(rowData.idTicket);
        dispatch(setIdTicket(rowData.idTicket));
        return navigate(`/atention/atention-register/`);
      },
    },
  ];

  return (
    <>
      <Container>
        <h1>LISTADO DE TICKETS</h1>
        <MaterialTable
          title="Tickets pendientes"
          columns={columns}
          data={tickets}
          actions={actions}
          options={options}
          //components={components}
        />
      </Container>
    </>
  );
};

export default ListAtention;

import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { historialAtention } from "../../actions/atentionActions";

const columns = [
  { title: "# Ticket", field: "idTicket" },
  { title: "Usuario Soporte", field: "usuarioSoporte" },
  { title: "Fecha Atencion", field: "fechaAtencion" },
  { title: "Trabajo Realizado", field: "trabajoRealizado" },
  { title: "Solitante", field: "ticket.solicitante" },
  { title: "Fecha ingreso", field: "ticket.fechaIngreso" },
  { title: "Asunto", field: "ticket.asunto" },
  { title: "Incidencia", field: "ticket.incidencia" },
  { title: "Atencion", field: "ticket.atencion" },
];

const Historial = () => {
  const dispatch = useDispatch();
  const historial = useSelector((state) => state.atention.historial);

  useEffect(() => {
    dispatch(historialAtention());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1>ESTADO DE ATENCIÓN</h1>
        <MaterialTable
          title="Historial de atención"
          columns={columns}
          data={historial}
          //actions={actions}
          //options={options}
          //components={components}
        />
      </Container>
    </>
  );
};

export default Historial;

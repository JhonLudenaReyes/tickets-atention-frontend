import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/layout/footer/Footer";
import Sidebar from "./components/layout/sidebar/Sidebar";
import Navigation from "./components/layout/navbar/Navigation";
import ListTickets from "./components/ticket/ListTickets";
import TicketRegister from "./components/ticket/TicketRegister";
import ListAtention from "./components/Atention/ListAtention";
import AtentionRegister from "./components/Atention/AtentionRegister";
import Historial from "./components/Atention/Historial";

import { Provider } from "react-redux";
import store from "./store";
import { Col, Container, Row } from "react-bootstrap";

import "./App.css";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navigation />
          <Container fluid className="appContainer">
            <Row style={{ height: "550px" }}>
              <Col className="appColSidebar" lg={3}>
                <Sidebar />
              </Col>
              <Col>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route
                    path="/ticket/list-tickets"
                    element={<ListTickets />}
                  />
                  <Route
                    path="/ticket/ticket-register"
                    element={<TicketRegister />}
                  />
                  <Route
                    path="/atention/list-atention"
                    element={<ListAtention />}
                  />
                  <Route
                    path="/atention/atention-register"
                    element={<AtentionRegister />}
                  />
                  <Route
                    path="/atention/historial-atention"
                    element={<Historial />}
                  />
                </Routes>
              </Col>
            </Row>
          </Container>
          <Footer />
        </Router>
      </Provider>
    </>
  );
};

export default App;

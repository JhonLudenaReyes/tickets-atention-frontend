import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Brand from "./Brand";
//import Menu from "./Menu";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Brand />
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

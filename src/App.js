import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AgregCita from "./components/AgregarCita";
import Listcita from "./components/ListaCitas";
import "./App.css";
import Modal from "./components/Modal/Modal";
function App() {
  const [citaId, setcitaId] = useState("");

  const getCitaIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setcitaId(id);
  };
  return (
    <>
      <Navbar className="custom-navbar" >
        <Container>
          <Navbar.Brand href="#home">Citas Iobella</Navbar.Brand>
          <img src={require ("../src/icono/iconoiobella.png")} alt="10" width="70" height="34" class="d-inline-block align-text-top"></img>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AgregCita id={citaId} setcitaId={setcitaId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Listcita getCitaId={getCitaIdHandler} />
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default App;

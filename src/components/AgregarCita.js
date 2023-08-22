import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import serviciocita from "../services/ServicioCitas";

const AgregCita = ({ id, setcitaId }) => {
  const [nombre, setnombre] = useState("");
  const [servicio, setservicio] = useState("");
  const [fecha, setfecha] = useState("");
  const [hora, sethora] = useState("");
  const [Estilista, setestilista] = useState("");
  const [status, setStatus] = useState("Disponible");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (nombre === "" || servicio === "") {
      setMessage({ error: true, msg: "Favor de llenar todos los compos!" });
      return;
    }
    const citanueva = {
      nombre,
      servicio,
      fecha,
      hora,
      Estilista,
      status,
    };
    console.log(citanueva);

    try {
      if (id !== undefined && id !== "") {
        await serviciocita.updateCita(id, citanueva);
        setcitaId("");
        setMessage({ error: false, msg: "Cita Actulizada!" });
      } else {
        await serviciocita.AgregCitas(citanueva);
        setMessage({ error: false, msg: "Cita Agregada!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setnombre("");
    setservicio("");
    setestilista("");
    setfecha("");
    sethora("");


  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await serviciocita.getCita(id);
      console.log("the record is :", docSnap.data());
      setnombre(docSnap.data().nombre);
      setservicio(docSnap.data().servicio);
      setestilista(docSnap.data().Estilista);
      setfecha(docSnap.data().fecha);
      sethora(docSnap.data().hora);


      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formcitasnombre">
            <InputGroup>
              <InputGroup.Text id="formcitasnombre">1</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setnombre(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formcitasservicio">
            <InputGroup>
              <InputGroup.Text id="formcitasservicio">2</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Servicio"
                value={servicio}
                onChange={(e) => setservicio(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formcitasfecha">
            <InputGroup>
              <InputGroup.Text id="formcitasservicio">3</InputGroup.Text>
              <Form.Control
                type="date"
                placeholder="Fecha"
                value={fecha}
                onChange={(e) => setfecha(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formcitashora">
            <InputGroup>
              <InputGroup.Text id="formcitasservicio">3</InputGroup.Text>
              <Form.Control
                type="time"
                placeholder="Hora"
                value={hora}
                onChange={(e) => sethora(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formcitasestilista">
            <InputGroup>
              <InputGroup.Text id="formcitasservicio">4</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Estilista"
                value={Estilista}
                onChange={(e) => setestilista(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Pendiente");
                setFlag(true);
              }}
            >
              Pendiente
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("En Progreso");
                setFlag(false);
              }}
            >
              En Progreso
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Agregar/ Actulizar
            </Button>

            
          </div>
          
        </Form>
      </div>
    </>
  );
};

export default AgregCita;

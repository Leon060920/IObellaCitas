import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import serviciocita from "../services/ServicioCitas";
import Modal from "./Modal/Modal";

  

const Listcita = ({ getCitaId }) => {
  const [citas, setcitas] = useState([]);
  useEffect(() => {
    getCitas();
  }, []);

  const getCitas = async () => {
    const data = await serviciocita.getAllCitas();
    console.log(data.docs);
    setcitas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await serviciocita.deleteCita(id);
    getCitas();
  };


  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getCitas}>
          Recargar
        </Button>
      </div>

      
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Servicio</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Estilista</th>
            <th>Estado</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.nombre}</td>
                <td>{doc.servicio}</td>
                <td>{doc.fecha}</td>
                <td>{doc.hora}</td>
                <td>{doc.Estilista}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getCitaId(doc.id)}
                  >
                    Editar
                  </Button>
                  <Button 
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)} 
                  >
                    Borrar


                  </Button>

                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <hr></hr>
      <Modal />
    </>
  );
};

export default Listcita;

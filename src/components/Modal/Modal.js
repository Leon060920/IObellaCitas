import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./Modal.css"
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ayuda?
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Si tienes alguna duda contactanos</Modal.Title>
        </Modal.Header>
        <Modal.Body>Redacta tu duda o sugerencia en la seccion de abajo!</Modal.Body>

        <div class="center">

        <div >
        <form action="https://formsubmit.co/leonelalpha@gmail.com" method="POST">
     <input class="inputbox" type="email" name="Correo" required placeholder='Correo'/>
     <br/>
     
     <input class="inputbox" type="text" name="Mensaje" required placeholder='Mensaje'/>
     <br/>
     
     <button  className='submit' type="submit">Enviar!</button>
</form>
</div>
        </div>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
           <hr/>
        </Modal.Footer>
       
      </Modal>
    </>
  );
}

export default Example;
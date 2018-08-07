import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default props => (
  <Modal show={props.open}>
    <Modal.Header>
      <Modal.Title>Adicionar pessoa</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <strong>Nome</strong>
      <input className="form-control" onChange={props.onChange} />
    </Modal.Body>
    <Modal.Footer>
      <Button bsStyle="success" onClick={props.save}>
        Salvar
      </Button>
      <Button onClick={props.close}>Fechar</Button>
    </Modal.Footer>
  </Modal>
);

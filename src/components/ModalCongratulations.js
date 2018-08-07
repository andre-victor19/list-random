import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default props => (
  <Modal show={props.open}>
    <Modal.Body>
      <section style={{ fontSize: '30pt', textAlign: 'center' }}>
        <strong>{`Parabéns ${props.name} !!`}</strong>
      </section>
    </Modal.Body>
    <Modal.Footer>
      <Button bsSize="sm" onClick={props.close}>
        Fechar
      </Button>
    </Modal.Footer>
  </Modal>
);

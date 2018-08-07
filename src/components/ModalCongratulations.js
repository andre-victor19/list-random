import React, { Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Confetti from './Confetti';
export default props => (
  <Fragment>
    {props.open && <Confetti />}
    <Modal show={props.open} bsSize="lg">
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
  </Fragment>
);

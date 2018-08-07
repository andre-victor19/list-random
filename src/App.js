import React, { Component, Fragment } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import Modal from './components/Modal';
import ModalCongratulations from './components/ModalCongratulations';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openModal: false,
      openModalCongratulation: false,
      people: JSON.parse(localStorage.getItem('people')) || [],
    };
  }
  save() {
    this.state.people.push(this.state.person);
    localStorage.setItem('people', JSON.stringify(this.state.people));
    this.setState({ openModal: false });
  }

  sort() {
    const { people } = this.state;
    const name = people[Math.floor(Math.random() * people.length)];
    this.setState({ openModalCongratulation: true, name });
  }

  remove(index) {
    const { people } = this.state;
    people.splice(index, 1);
    localStorage.setItem('people', JSON.stringify(people));
    this.forceUpdate();
  }

  render() {
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <section className="App-section">
              <strong>Ministério Infantil ICB</strong>
              <ButtonGroup>
                <Button
                  disabled={this.state.people.length <= 1 ? true : false}
                  onClick={() => this.sort()}
                  bsSize="sm"
                  bsStyle="info"
                >
                  Sortear
                </Button>
                <Button
                  onClick={() => this.setState({ openModal: true })}
                  bsSize="sm"
                  bsStyle="primary"
                >
                  Adicionar
                </Button>
              </ButtonGroup>
            </section>
          </header>
          <section style={{ margin: '1vw' }}>
            <Table striped bordered condensed hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {this.state.people.map((person, i) => (
                  <tr key={i}>
                    <td>{`#0${i}`}</td>
                    <td>{person}</td>
                    <td>
                      <Button
                        onClick={() => this.remove(i)}
                        bsStyle="danger"
                        bsSize="xsmall"
                      >
                        Remover
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </section>
          <Modal
            onChange={e => this.setState({ person: e.target.value })}
            save={() => this.save()}
            close={() => this.setState({ openModal: false })}
            open={this.state.openModal}
          />
          <ModalCongratulations
            close={() => this.setState({ openModalCongratulation: false })}
            open={this.state.openModalCongratulation}
            name={this.state.name}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;

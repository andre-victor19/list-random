import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
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
    this.save = this.save.bind(this);
    this.sort = this.sort.bind(this);
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
        </header>
        <table>
          <tr>
            <th>Nome</th>
          </tr>
          {this.state.people.map((person, i) => (
            <tr key={i}>
              <td>{person}</td>
            </tr>
          ))}
        </table>
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
    );
  }
}

export default App;

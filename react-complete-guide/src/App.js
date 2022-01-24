import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ name: "Auba", age: 31 }, { name: "Laca", age: 29 }, { name: "Nico", age: 25 }],
    showPersons: false
  };
  anotherPerson = { name: "Sead", age: 28 };

  switchNameHandler = () => {
    this.setState({
      persons: [{ name: "Aubameyang", age: 31 }, { name: "Lacazette", age: 29 }, { name: "Nicolas", age: 25 }]
    });
    this.anotherPerson.name = 'Another Person';
  }

  changeNameFromInputHandler = (event, index) => {
    const person = { ...this.state.persons[index] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[index] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsDisplay = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  removePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons =
        this.state.persons.map((person, index) => {
          return <Person
            name={person.name}
            age={person.age}
            click={() => this.removePerson(index)}
            changeNameHandler={(event) => this.changeNameFromInputHandler(event, index)}
          />
        });
    }

    return (
      <div className="App">
        <h1>Hi, I am learning React from Max Schwarzmuller from Udemy!</h1>
        <p>I just learnt about what jsx is. It is awesome.</p>
        <button style={buttonStyle} onClick={this.switchNameHandler}>Switch Name</button>
        <button style={buttonStyle} onClick={this.togglePersonsDisplay}>Toggle Persons</button>
        {
          this.state.showPersons ?
            <div>
              {persons}
            </div>
            : null
        }

      </div>
    );
  }
}

export default App;

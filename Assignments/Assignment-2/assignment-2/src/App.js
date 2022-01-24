import React, { Component } from 'react';
import './App.css';
import Char from './Components/Char/Char';
import Validation from './Components/Validation/Validation';

class App extends Component {
  state = {
    inputText: '',
    inputLength: 0
  };

  setInputLengthHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      inputText: event.target.value,
      inputLength: event.target.value.length
    });
  }

  render = () => {
    return (
      <div className="App">
        <h1>Assignment-2</h1>
        <input type="text" onChange={(event) => this.setInputLengthHandler(event)} />
        <p>The length of the text is {this.state.inputLength}</p>
        <Validation inputLength={this.state.inputLength} />
        {
          this.state.inputText?.split('').map((letter, index) => {
            return <Char letter={letter} key={index} />
          })
        }
      </div>
    );
  }
}

export default App;

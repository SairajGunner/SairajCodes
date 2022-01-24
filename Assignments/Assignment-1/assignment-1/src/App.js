import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: "Sairaj"
  }

  changeuserNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  render() {
    const secondUserOutputStyle = {
      backgroundColor: 'cyan'
    };

    return (
      <div style={secondUserOutputStyle} className="App">
        <UserInput userName={this.state.userName} nameChangeHandler={this.changeuserNameHandler} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;

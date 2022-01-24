import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <input className="UserInput" type="text" onChange={props.nameChangeHandler} value={props.userName} />
    )
}

export default userInput;
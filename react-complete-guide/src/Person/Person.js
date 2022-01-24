import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>I am {props.name}! I am {props.age} years old.<span className="ml-5">{props.children}</span></p>
            <input type="text" onChange={props.changeNameHandler} value={props.name} />
            <button onClick={props.click}>Remove</button>
        </div>
    )
}

export default person;
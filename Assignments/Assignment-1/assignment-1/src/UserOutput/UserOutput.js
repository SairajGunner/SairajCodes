import React from 'react';

const userOutputStyle = {
    backgroundColor: 'grey',
    border: '2px solid black',
    margin: '10px',
    color: 'coral'
};

const userOutput = (props) => {
    return (
        <div style={userOutputStyle}>
            <p>Hi, my name is {props.userName}.</p>
            <p>I am learning React and it is fun!!!</p>
        </div>
    )
};

export default userOutput;
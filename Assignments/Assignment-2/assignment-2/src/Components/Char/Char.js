import React from 'react';

const charDivStyle = {
    display: 'inline-block',
    height: '50px',
    width: '50px',
    color: 'white',
    backgroundColor: 'black',
    margin: '10px'
}

const charSpanStyle = {
    verticalAlign: 'middle'
}

const char = (props) => {
    return (
        <div style={charDivStyle}>
            <span style={charSpanStyle}>{props.letter}</span>
        </div>
    );
}

export default char;
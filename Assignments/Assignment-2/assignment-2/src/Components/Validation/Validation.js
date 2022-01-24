import React from 'react';

const validation = (props) => {
    let message = null;
    if (props.inputLength < 5)
        message = 'Text too short';
    else
        message = 'Text long enough';

    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default validation;
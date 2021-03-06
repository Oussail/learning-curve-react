import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input name={props.id} type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};


export default person;
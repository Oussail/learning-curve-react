import React from 'react';



const Cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color:'white',
        font: 'inherit',
        border: '1px solid blue',
        padding : '8px',
        cursor: 'pointer',
      };
      if(props.showPersons) {
        style.backgroundColor = 'red';
      }
    return(<div>
        <h1>Test</h1>
        <p>This is really working</p>
        <button style={style} onClick={props.clicked}>Toggle Persons</button>
    </div>);

}


export default Cockpit;
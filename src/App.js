import { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'dsqds', name:"Oussail", age :25 },
      { id: 'fsdfsd', name:"Stephanie", age :20 }
    ],
    showPersons : false
  }
  
  togglePersonsHandler =  () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler =  (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  nameChangedHandler = (event, personId) => {
    const persons = [...this.state.persons];
    const p = persons.find(p => p.id === personId);
    p.name = event.target.value;
    this.setState({
      persons: persons
    });
  }


  

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding : '8px',
      cursor: 'pointer',
    };
    let persons = null;
    if(this.state.showPersons) {

      persons = this.state.persons.map((person, index) => (
        <Person changed={(event) => {this.nameChangedHandler(event, person.id)}} click={() => {this.deletePersonHandler(index)}} name={person.name} age={person.age} key={person.id}/>
      ));

      style.backgroundColor = 'red';
    }
    return (
      <div className="App">
        <h1>Test</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    ) 
  }
}

export default App;

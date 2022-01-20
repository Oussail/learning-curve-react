import { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';



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
    let persons = null;
    if(this.state.showPersons) {
      persons = (<Persons persons={this.state.persons}  changed={this.nameChangedHandler} clicked={this.deletePersonHandler} />);
    }
    return (
      <div className="App">
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/> 
        {persons}
      </div>
    ) 
  }
}

export default App;

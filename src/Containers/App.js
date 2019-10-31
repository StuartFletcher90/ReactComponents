import React, { Component } from 'react';
import classes from "./App.css";
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';


//CLASS APP COMPONENT
class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Stu', age: 29 },
      {id: '2', name: 'Laura', age: 32 },
      {id: '3', name: 'Mathew', age: 27}
    ],
    showPersons: false
  }
  

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    

    this.setState({persons: persons});
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
        <Persons persons={this.state.persons} clicked={this.deletePersonsHandler}
        changed={this.nameChangedHandler}/>
      </div>
      );
    
      btnClass = classes.Red;
    }


    let assignedClasses = [];
    if (this.state.persons.length <=2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <=1) {
      assignedClasses.push(classes.bold); //classes are red and now also bold
    }


    return (

      <div className={classes.App}>
        <h1 className={classes.Heading}>Hello, I'm a React App!</h1>
        <p className={assignedClasses.join(' ')}>Created by Stu</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
      </div>
    )
  }
};
// replaced every this.State with personsState as we're using hooks with functional components
export default App;

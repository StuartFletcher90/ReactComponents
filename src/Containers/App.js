import React, { Component } from 'react';
import classes from "./App.css";
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';


//CLASS APP COMPONENT
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[app.js] constructor')

    }

  state = {
    persons: [
      {id: '1', name: 'Stu', age: 29 },
      {id: '2', name: 'Laura', age: 32 },
      {id: '3', name: 'Mathew', age: 27}
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js componentDidUpdate]');
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
    console.log('[App.js] render')
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
      <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonsHandler}
        changed={this.nameChangedHandler}/>
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showCockpit: false });
      }}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons} 
        persons={this.state.persons}
        clicked={this.togglePersonsHandler} /> : null}
        {persons}
      </div>
    )
  }
};
export default App;

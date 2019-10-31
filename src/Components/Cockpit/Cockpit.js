import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
            btnClass = classes.Red;
    }


    if (props.persons.length <=2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <=1) {
      assignedClasses.push(classes.bold); //classes are red and now also bold
    }

    return (
        <div className={classes.Cockpit}>
            <h1 className={classes.Heading}>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Created by Stu</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;
import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    // *! reference for a function!
    const toggleBtnRef =  useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('saved data to cloud');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] clean up work in useEffect');
        }
    }, []);

     useEffect(() => {
         console.log('[Cockpit.js] 2nd useEffect');
         return () => {
             console.log('[Cockpit.js] clean up work in 2nd useEffect');
         };
     });


    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
            btnClass = classes.Red;
    }


    if (props.personslength <=2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personslength <=1) {
      assignedClasses.push(classes.bold); //classes are red and now also bold
    }

    return (
        <div className={classes.Cockpit}>
            <h1 className={classes.Heading}>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Created by Stu</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log In</button>
        </div>
    );
};

export default React.memo(Cockpit);
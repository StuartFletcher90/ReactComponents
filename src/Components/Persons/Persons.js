import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) { <----- //*?no longer needed
    //     console.log('[Persons.js] getDerivedStateFromProps');      |
    //     return state;                                              |
    // }                                                        <---- |

    //*!COMMENTED OUT FOR USE OF PURE COMPONENTS
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Person.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked) {
    //         return true;    
    //     } else {
    //         return true;
    //     }
        
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }


    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }
    render() {
        console.log('[Persons.js] rendering...');
    return (this.props.persons.map((person, index) => {
    return (
        <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={event => this.props.changed(event, person.id)}
        />

    );
  })
);
}
};

export default Persons;
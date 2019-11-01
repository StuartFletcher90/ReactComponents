import React from 'react';

//*! Sets up a class inside on a div that wraps my component.
// const withClass = props => (
//  <div className={props.classes}>
//      {props.children}
//  </div>
// );

//*! Another way to set up HOC components

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};

export default withClass;
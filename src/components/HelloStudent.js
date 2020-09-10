import React from 'react';

// We can try a fat arrow function as well (let's try to be consistent in the real world though!)
// If the component accepts a parameter, this is referred to as a "prop."
// Props allow us to pass values INTO our components from a parent document / component.
const HelloStudent = props => {
  return (
    <p>
      Hello&nbsp;
      { props.name },
      welcome to TECHCareers and its React unit!
      Their favourite unit is:&nbsp;
      { props.unit }
    </p>
  );
}

export default HelloStudent 

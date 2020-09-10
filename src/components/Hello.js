import React from 'react'; // We'll need React to build our component.

// There are two ways to make a component... class and function.
// Let's give "function" a shot!
function Hello ()
{ // Every component should return JSX.
  return (
    <h1>
      Hello, World!
    </h1>
  );
}

// If we want to be able to import our function into other files...
// We have to export here!
export default Hello;

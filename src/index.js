import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello'; // If we want to use a component in this file, we have to import it!

ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);

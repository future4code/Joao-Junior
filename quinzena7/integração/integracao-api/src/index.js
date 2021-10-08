import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": 'joao-helio-banu'
    }
  })

  request.then((response) => {}) */


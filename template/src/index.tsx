// Packages
import React 	from 'react';
import ReactDOM from 'react-dom';

// Systems
import App from './js/systems/App';

// Services
import * as serviceWorker 	from './js/services/serviceWorker';
import reportWebVitals 		from './js/services/reportWebVitals';

// We separate the styles from the js, those are general styles that can
// be related to packages (such as bootstrap)

import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

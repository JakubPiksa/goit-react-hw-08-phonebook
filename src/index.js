import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="goit-react-hw-08-movies">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

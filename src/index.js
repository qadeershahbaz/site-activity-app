import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import {BrowserRouter as Router} from 'react-router-dom';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import {LocaleProvider} from 'antd-mobile'
Amplify.configure(config);


ReactDOM.render(
  <Router>
    <LocaleProvider locale={enUS}>
    <App />
    </LocaleProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

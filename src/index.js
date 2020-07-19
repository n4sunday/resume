import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AOS from 'aos'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './styles/app.scss'

library.add(fab)
AOS.init()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Header from './components/header'
import { MoviesGrid } from './components/moviesGrid';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <MoviesGrid/>
  </React.StrictMode>,
  document.getElementById('root')
);




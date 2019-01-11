import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { hot } from 'react-hot-loader';

let Entry = hot(module)(App);
ReactDOM.render(<Entry />, document.getElementById('root'));

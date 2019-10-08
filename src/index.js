import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import M from 'materialize-css';
import options from 'materialize-css';
ReactDOM.render(<App />, document.getElementById('root'));
var elems = document.querySelectorAll('.slider');
var instances = M.Slider.init(elems, options);
var elems2 = document.querySelectorAll('.modal');
var instances2 = M.Modal.init(elems2, options);
var elems3 = document.querySelectorAll('.materialboxed');
var instances3 = M.Materialbox.init(elems3, options);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

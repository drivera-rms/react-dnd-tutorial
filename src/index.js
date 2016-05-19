import React from 'react';
import ReactDOM from 'react-dom';

var Board = require('./Board');
var observe = require('./Game').observe;

var rootEL = document.getElementById('root');

observe(function (knightPosition) {
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEL
  );
});

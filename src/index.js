import React from 'react';
import ReactDOM from 'react-dom';

var Board = require('./Board');


ReactDOM.render(
    <Board knightPosition={[0,0]} />,
    document.getElementById('root')
);

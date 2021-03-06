var React = require('react');
var PropTypes = React.PropTypes;

var Knight = require('./Knight');
var Square = require('./Square');
var {moveKnight, canMoveKnight} = require('./Game.js');


var Board = React.createClass({
  propTypes: {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  },


  renderSquare: function (i) {
    var y = i % 8;
    var x = Math.floor(i / 8);
    var black = (x + y) % 2 === 1;

    var knightX = this.props.knightPosition[0];
    var knightY = this.props.knightPosition[1];
    var piece = (x === knightX && y === knightY) ?
      <Knight /> :
      null;

    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}
           onClick={this.handleSquareClick.bind(this, x, y)}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
  },


  handleSquareClick: function (toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  },


  render: function () {
    var squares = [];
    for (var i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }


});

module.exports = Board;

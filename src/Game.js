var knightPosition = [0, 0];
var observer = null;


function emitChange () {
  observer(knightPosition);
}


exports.observe = function (o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
};


exports.moveKnight = function (toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

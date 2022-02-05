const { testHandler } = require('./events');

module.exports = function connectionWS(socket) {
  socket.on('test', testHandler);
};

var controller = {};

controller.broadcastTodo = function (newTodo) {
  var socket = io();

  socket.emit('todo', newTodo);
};

controller.receivedTodo = function (self) {
  // Initialize socket.io
  var socket = io();

  // On todo event emission...
  socket.on('todo', function (data) {

    // Add a todo
    self.addTodo(data);

  });
}

module.exports = controller;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 3300;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

var routes = require('./routes');

// test data currently
var todos = [{ user: 'brian', text: 'take dog out', key: 1419911800571 }, { user: 'brian', text: 'eat', key: 1419911800580 }];

var setCurrentTodosMiddle = function (req, res, next) {
  req.theCurrentTodos = todos;
  return next();
}

app.get('/', setCurrentTodosMiddle, routes.index);

io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('todo', function (newTodo) {
    
    console.log(newTodo);
    socket.broadcast.emit('todo', newTodo);

  });

});



http.listen(port, function(){
  console.log('listening on *:'+port);
});
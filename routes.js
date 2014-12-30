var JSX = require('node-jsx').install();
var React = require('react');
var TodoApp = React.createFactory(require('./components/TodoApp.react'));

var routes = {

  index: function (req, res) {

    var todos = req.theCurrentTodos;

    // Render React to a string, passing in current todos
    var markup = React.renderToString(
      TodoApp({
        todos: todos
      })
    );

    res.render('index', {
      markup: markup,
      state: JSON.stringify(todos)
    });

  }

}

module.exports = routes;
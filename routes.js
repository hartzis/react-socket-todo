var JSX = require('node-jsx').install();
var react = require('react');
var todoApp = require('./components/TodoApp.react');

var routes = {

  index: function (req, res) {

    var todos = req.theCurrentTodos;
    var markup = {world:'<b>world</b>'};

    res.render('index', {
      markup: markup,
      state: JSON.stringify(todos)
    });

  }

}

module.exports = routes;
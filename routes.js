var react = require('react');

var routes = {

  index: function (req, res) {

    var todos = ['hello'];
    var markup = {world:'world'};

    res.render('index', {
      markup: markup,
      state: JSON.stringify(todos)
    });

  }

}

module.exports = routes;
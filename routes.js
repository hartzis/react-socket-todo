var react = require('react');

var routes = {

  index: function (req, res) {

    var todos = ['hello'];
    var markup = {world:'<b>world</b>'};

    res.render('index', {
      markup: markup,
      state: JSON.stringify(todos)
    });

  }

}

module.exports = routes;
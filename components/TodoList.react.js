/** @jsx React.DOM */

// TodoList.react.js

var React = require('react/addons');

var TodoList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <li className="theTodoListItem" key={item.key}>{item.user}: {item.text}</li>;
    };
    return <ul className="theTodoList">{this.props.items.map(createItem)}</ul>;
  }
});

module.exports = TodoList;
/** @jsx React.DOM */

// TodoList.react.js

var React = require('react/addons');

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li className="theTodoListItem">{itemText}</li>;
    };
    return <ul className="theTodoList">{this.props.items.map(createItem)}</ul>;
  }
});

module.exports = TodoList;
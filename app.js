/** @jsx React.DOM */

var React = require('react');
var TodoApp = require('./components/TodoApp.react');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

console.log('initial-state-', initialState);

// Render the components, picking up where react left off on the server
React.render(
  <TodoApp todos={initialState}/>,
  document.getElementById('react-app')
);
/** @jsx React.DOM */

// TodoApp.react.js

var React = require('react/addons');

var TodoList = require('./TodoList.react');

var TodoApp = React.createClass({
  getInitialState: function( props ) {
    props = props || this.props;
    return {items: props.todos, text: '', user: ''};
  },
  onTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  onUserChange: function(e) {
    this.setState({user: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var now = new Date();
    var key = now.valueOf();
    var nextItems = this.state.items.concat( [ { user: this.state.user, text: this.state.text, key: key } ] );
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form className="todoForm" onSubmit={this.handleSubmit}>
          <input type="text" required className="todoInput userInput" onChange={this.onUserChange} value={this.state.user} />
          <input type="text" required className="todoInput textInput" onChange={this.onTextChange} value={this.state.text} />
          <button className="submitTodo">{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoApp;
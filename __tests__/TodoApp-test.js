/** @jsx React.DOM */

// __tests__/TodoApp-test.js

jest.dontMock('../components/TodoApp.react');
// have to tell jest not to mock the TodoList that gets required from within TodoApp
jest.dontMock('../components/TodoList.react');
describe('TodoApp', function() {

  var React = require('react/addons');
  var TodoApp = require('../components/TodoApp.react');
  var TestUtils = React.addons.TestUtils;

  var renderedTodoApp = TestUtils.renderIntoDocument(
    <TodoApp />
  );
    

  it('should have a div dom element', function() {
    var appDOMComponent = TestUtils.findRenderedDOMComponentWithTag(
      renderedTodoApp, 'div');
    expect(TestUtils.isDOMComponent( appDOMComponent )).toBe(true);
  });
    
  it('should add an item to the todo list', function() {

    var todoForm = TestUtils.findRenderedDOMComponentWithClass(
      renderedTodoApp, 'todoForm');

    var inputBox = TestUtils.findRenderedDOMComponentWithClass(
      renderedTodoApp, 'todoInput');

    inputBox.getDOMNode().value = 'take dog out';
    expect(inputBox.getDOMNode().value).toEqual('take dog out');
    TestUtils.Simulate.change(inputBox);
    // submit first item
    TestUtils.Simulate.submit(todoForm);    

    inputBox.getDOMNode().value = 'get food';
    expect(inputBox.getDOMNode().value).toEqual('get food');
    TestUtils.Simulate.change(inputBox);
    // submit second item
    TestUtils.Simulate.submit(todoForm);

    var submitTodo = TestUtils.findRenderedDOMComponentWithClass(
      renderedTodoApp, 'submitTodo');

    // should be on the third one since we submitted 2 todo's
    expect(submitTodo.getDOMNode().textContent).toEqual('Add #3');

    var theTodoList = TestUtils.findRenderedDOMComponentWithClass(
      renderedTodoApp, 'theTodoList');

    var todoListItems = TestUtils.scryRenderedDOMComponentsWithTag(
      renderedTodoApp, 'li');

    // does the todo list DOM exist
    expect(TestUtils.isDOMComponent( theTodoList )).toBe(true);

    // are there two list items that have been added
    expect(todoListItems[0].getDOMNode().textContent).toEqual('take dog out');
    expect(todoListItems[1].getDOMNode().textContent).toEqual('get food');

  });

});
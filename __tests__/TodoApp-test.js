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
    <TodoApp todos={[]} />
  );
    

  it('should have a div dom element', function() {
    var appDOMComponent = TestUtils.findRenderedDOMComponentWithTag(
      renderedTodoApp, 'div');
    expect(TestUtils.isDOMComponent( appDOMComponent )).toBe(true);
  });
    
  it('should add an item to the todo list', function() {

    var todoForm = TestUtils.findRenderedDOMComponentWithClass(
      renderedTodoApp, 'todoForm');

    var inputBoxUser = TestUtils.findRenderedDOMComponentWithClass(
      renderedTodoApp, 'userInput');

    var inputBoxText = TestUtils.findRenderedDOMComponentWithClass(
      renderedTodoApp, 'textInput');

    // set user
    inputBoxUser.getDOMNode().value = 'brian';
    expect(inputBoxUser.getDOMNode().value).toEqual('brian');
    TestUtils.Simulate.change(inputBoxUser);

    inputBoxText.getDOMNode().value = 'take dog out';
    expect(inputBoxText.getDOMNode().value).toEqual('take dog out');
    TestUtils.Simulate.change(inputBoxText);
    // submit first item
    TestUtils.Simulate.submit(todoForm);    

    inputBoxText.getDOMNode().value = 'get food';
    expect(inputBoxText.getDOMNode().value).toEqual('get food');
    TestUtils.Simulate.change(inputBoxText);
    // submit second item
    TestUtils.Simulate.submit(todoForm);

    var submitTodo = TestUtils.findRenderedDOMComponentWithClass(
      renderedTodoApp, 'submitTodo');

    // should be on the third one since we submitted 2 todo's
    expect(submitTodo.getDOMNode().textContent).toEqual('Add #3');

    var theTodoList = TestUtils.findRenderedDOMComponentWithClass(
      renderedTodoApp, 'theTodoList');

    var todoListItems = TestUtils.scryRenderedDOMComponentsWithClass(
      renderedTodoApp, 'theTodoListItem');

    // does the todo list DOM exist
    expect(TestUtils.isDOMComponent( theTodoList )).toBe(true);

    // are there two list items that have been added
    expect(todoListItems[0].getDOMNode().textContent).toEqual('brian: take dog out');
    expect(todoListItems[1].getDOMNode().textContent).toEqual('brian: get food');

  });

});
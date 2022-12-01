import React from 'react';
import {
  Counter,
  ColorPicker,
  TodoList,
  Form,
  DropDown,
  TodoEditor,
  TodoFilter,
  LoginForm,
  MyFormik,
} from 'components/Practics';
import colorPickerOptions from '../../../data/colorPicker';
import todos from '../../../data/todolist';
import { Box } from 'components/Box/Box';
import shortid from 'shortid';

export class State extends React.Component {
  state = {
    todos,
    filter: '',
    name: '',
    tag: '',
  };
  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(({ id }) => id !== todoId),
    }));
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  onToogleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };
  getCompletedTodo = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodos = todos.length;
    const visibleTodos = this.getVisibleTodos();
    const completedTodos = this.getCompletedTodo();

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={30}
        pb={50}
      >
        <Counter initialstate={10} />
        <ColorPicker options={colorPickerOptions} />
        <DropDown />
        <TodoEditor onSubmit={this.addTodo} />
        <TodoFilter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          onToogleCompleted={this.onToogleCompleted}
        />
        <Form onSubmit={this.formSubmitHandler} />
        <LoginForm />
        <MyFormik />
      </Box>
    );
  }
}

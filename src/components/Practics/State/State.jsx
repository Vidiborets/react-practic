import React from 'react';
import {
  Counter,
  TodoList,
  Form,
  TodoEditor,
  TodoFilter,
  LoginForm,
  DropDown,
  MyFormik,
  Modal,
  Clock,
  Tabs,
  ExtendsPlayer,
  IconButton,
  Reader,
  ColorPickerHooks,
} from 'components/Practics';
import colorPickerOptions from '../../../data/colorPicker';
import { Box } from 'components/Box/Box';
import shortid from 'shortid';
import tabs from '../../../data/tabs.json';
import publications from '../../../data/publications.json';

export class State extends React.Component {
  state = {
    todos: [],
    filter: '',
    name: '',
    tag: '',
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
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
  componentDidMount() {
    const todosLocal = JSON.parse(localStorage.getItem('todos'));
    if (todosLocal) {
      this.setState({
        todos: todosLocal,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    if (
      this.state.todos.length > prevState.todos.length &&
      prevState.todos.length !== 0
    ) {
      this.toggleModal();
    }
  }

  render() {
    const { todos, filter, showModal } = this.state;
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
        <Clock />
        <Tabs items={tabs} />
        <Counter initialstate={10} />
        <DropDown />
        <ColorPickerHooks options={colorPickerOptions} />
        {showModal && (
          <Modal>
            <TodoEditor onSubmit={this.addTodo} />
            <h1>Контент модалки</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              voluptatum fuga sed obcaecati hic fugit esse odio et qui, ipsum
              eveniet laudantium accusantium nulla quaerat beatae iste, cum
              asperiores debitis reprehenderit delectus voluptatibus? Molestias
              laborum, quasi quae doloribus cum quod debitis numquam ullam vitae
              temporibus alias velit! Autem, deleniti sed!
            </p>
          </Modal>
        )}
        <IconButton type="button" onClick={this.toggleModal}>
          Открыть модалку
        </IconButton>
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
        <ExtendsPlayer />
        <Reader items={publications} />
      </Box>
    );
  }
}

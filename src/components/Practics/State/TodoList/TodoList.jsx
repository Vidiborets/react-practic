import { TodoListItem } from './TodoList.styled';
import { Todo } from '../..';
export const TodoList = ({
  todos,
  onDeleteTodo,
  totalTodos,
  completedTodos,
  onToogleCompleted,
}) => (
  <ul>
    <p>Общее кол-во : {totalTodos}</p>
    <p>Выполнены : {completedTodos}</p>
    {todos.map(({ id, text, completed }) => (
      <TodoListItem key={id}>
        <Todo
          onDeleteTodo={() => onDeleteTodo(id)}
          onToogleCompleted={() => onToogleCompleted(id)}
          completed={completed}
          text={text}
        />
      </TodoListItem>
    ))}
  </ul>
);

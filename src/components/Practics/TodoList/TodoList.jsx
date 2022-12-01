import { TodoListItem, TodoListText } from './TodoList.styled';
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
        <TodoListText>{text}</TodoListText>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToogleCompleted(id)}
        />
        <button
          onClick={() => {
            onDeleteTodo(id);
          }}
          type="button"
        >
          Удалить
        </button>
      </TodoListItem>
    ))}
  </ul>
);

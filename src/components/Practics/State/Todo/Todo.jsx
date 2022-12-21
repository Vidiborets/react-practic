import { TodoListText } from '../TodoList/TodoList.styled';
import { IconButton } from '../IconButton/IconButton';
import { GrAddCircle } from 'react-icons/gr';
// import {React.Compomemnt as Icon } from './'
export const Todo = ({ onToogleCompleted, onDeleteTodo, completed, text }) => (
  <>
    <TodoListText>{text}</TodoListText>
    <input type="checkbox" checked={completed} onChange={onToogleCompleted} />
    <IconButton onClick={onDeleteTodo} type="button">
      <GrAddCircle />
    </IconButton>
  </>
);

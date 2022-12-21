import { Box } from 'components/Box/Box';
import { Button } from './Counter.styled';
const Counter = ({ onIncrement, onDecrement }) => (
  <Box display="flex" justifyContent="space-between">
    <Button onClick={onIncrement}>Увеличить на 1</Button>
    <Button onClick={onDecrement}>Уменьшить на 1</Button>
  </Box>
);
export default Counter;

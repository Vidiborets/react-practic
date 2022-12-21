import { Box } from 'components/Box/Box';
import { Text } from '../../../Task2/Statistics/Statistics.styled';
export const Statistic = ({ good, neutral, bad, total, percent }) => {
  return (
    <Box mt={10}>
      <ul>
        <li>
          <Text>Good</Text>
          <span>{good}</span>
        </li>
        <li>
          <Text>Neutral</Text>
          <span>{neutral}</span>
        </li>
        <li>
          <Text>Bad</Text>
          <span>{bad}</span>
        </li>
        <li>
          <Text>Total</Text>
          <span>{total}</span>
        </li>
        <li>
          <Text>Percent positive feedback</Text>
          <span>{percent}</span>
        </li>
      </ul>
    </Box>
  );
};

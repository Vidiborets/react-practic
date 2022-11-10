import { Box } from 'components/Box/Box';
import { List, ListItem, Title } from './Statistics.styled';
import { getRandom } from 'utils';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      width={340}
      alignItems="center"
      display="flex"
      flexDirection="column"
      background="white"
      mb={10}
      borderRadius={4}
    >
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id} style={{ backgroundColor: getRandom() }}>
            <span>{label}</span>
            <span>{percentage}</span>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

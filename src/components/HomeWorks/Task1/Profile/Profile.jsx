import { Box } from 'components/Box/Box';
import {
  Image,
  List,
  ListItem,
  TextName,
  Text,
  TextItem,
  TextStats,
} from './Profile.styled';
export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Box alignItems="center" textAlign="center" bg="white" borderRadius={10}>
      <Box display="flex" flexDirection="column" alignItems="center" p={6}>
        <Image src={avatar} alt={username} />
        <TextName>{username}</TextName>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Box>
      <List>
        <ListItem>
          <TextItem>Followers</TextItem>
          <TextStats>{stats.followers}</TextStats>
        </ListItem>
        <ListItem>
          <TextItem>Views</TextItem>
          <TextStats>{stats.views}</TextStats>
        </ListItem>
        <ListItem>
          <TextItem>Likes</TextItem>
          <TextStats>{stats.likes}</TextStats>
        </ListItem>
      </List>
    </Box>
  );
}

import { FriendListItem } from './FriendListItem/FriendListItems';
import { Box } from 'components/Box/Box';
export const FriendList = ({ friends }) => {
  return (
    <Box as="ul" mb={30}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          key={id}
          isOnline={isOnline}
        />
      ))}
    </Box>
  );
};

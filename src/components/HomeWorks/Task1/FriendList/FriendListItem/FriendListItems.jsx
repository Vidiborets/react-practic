import { ListItem, Status, Image, Text } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <ListItem key={id}>
      <Status isOnline={isOnline}></Status>
      <Image src={avatar} alt={name} width="48" />
      <Text>{name}</Text>
    </ListItem>
  );
};

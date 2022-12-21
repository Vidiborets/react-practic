import { Box } from 'components/Box/Box';

export const UserMenu = ({ inLogOut, user }) => {
  return (
    <Box display="flex" alignItems="center">
      <img width={32} height={32} src={user.avatar} alt={user.name} />
      <p>Добро пожаловать{user.name}</p>
      <button type="button" onClick={inLogOut}>
        Вийти
      </button>
    </Box>
  );
};

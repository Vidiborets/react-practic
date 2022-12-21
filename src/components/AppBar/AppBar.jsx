import authContext from '../Provaider/context';
import { UserMenu } from './UserMenu/UserMenu';
import { useContext } from 'react';
export const AppBar = () => {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);
  return (
    <>
      {isLoggedIn ? (
        <UserMenu user={user} inLogOut={onLogOut} />
      ) : (
        <button type="button" onClick={onLogIn}>
          Войти
        </button>
      )}
    </>
  );
};

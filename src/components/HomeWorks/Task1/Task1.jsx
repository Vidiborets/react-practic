import { Box } from 'components/Box/Box';
import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';
export const Task1 = ({ user, data, friends, transactions }) => {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" mb={30}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        mb={30}
      >
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <FriendList friends={friends} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <TransactionHistory items={transactions} />
      </Box>
    </>
  );
};

import Profile from './Profile/Profile';
import user from '../data/user.json';

import Statistics from './Statistics/Statistics';
import data from '../data/data.json';

import FriendList from './FriendList/FriendList.jsx';
import friends from '../data/friends.json';

import TransactionHistory from './Transactions/TransactionHistory.jsx';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        stats={user.stats}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

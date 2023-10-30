
import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import items from '../assets/transactions.json';

import { Profile } from  './User profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './FriendList/friendList';
import { TransactionHistory } from './TransactionHistory/transactionHistory';


export const App = () => {
  return (
    <div>
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        title="Upload stats" stats={data}
      />

      <FriendList
        friends={friends}
      />

      <TransactionHistory
        items={items}
      />;

    </div>
  );
};

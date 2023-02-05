import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import FriendList from './FriendList/FriendList.jsx';
import friends from '../data/friends.json';



export const App = () => {
 return (
  <div>
      <Profile 
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      // stats={user.stats}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      />
      <Statistics 
      title="Upload stats" 
      stats={data}
      />
      <FriendList friends={friends} />;
  </div>
  
 );
 
};

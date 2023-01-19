import { ProfileCard } from './Profile/ProfileCard/ProfileCard';
import user from './Profile/ProfileCard/user.json'

export const App = () => {
 return (
  <div>
      <ProfileCard 
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      // stats={user.stats}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      />
  </div>
 );
};

import { ProfileCard } from './Profile/ProfileCard/ProfileCard';
import user from './Profile/ProfileCard/user.json';
// import { Statistics } from './Statistics/Statistics';
// import data from './Statistics/data.json';



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
      {/* <Statistics 
      title="Upload stats" 
      stats={data} /> */}
  </div>
  
 );
 
};

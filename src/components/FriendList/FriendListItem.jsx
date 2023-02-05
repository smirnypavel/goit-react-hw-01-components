import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendsListItem({ avatar, name, isOnline }) {
 return (
  <li className={styles.item}>
   <span
    className={styles.status}
    style={isOnline ? { backgroundColor: 'rgba(87, 248, 7, 0.356)' } : { backgroundColor: 'rgba(247, 6, 6, 0.356)' }}
   ></span>
   <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
   <p className={styles.name}>{name}</p>
  </li>
 );
}

FriendsListItem.propTypes = {
 avatar: PropTypes.string.isRequired,
 name: PropTypes.string.isRequired,
 isOnline: PropTypes.bool.isRequired,
};
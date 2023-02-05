import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, name, isOnline, id}) => {
  return (
    <li class="item">
        <span class="{isOnline}">{isOnline}</span>
        <img className='avatar' 
            src={avatar} 
            alt="User avatar" 
            width="48" />
        <p class="name">{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
}

export default FriendListItem
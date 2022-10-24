import PropTypes from 'prop-types';
import { ListItem } from './FriendList.style';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ListItem>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </ListItem>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

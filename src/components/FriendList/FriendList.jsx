import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={'item'}>
          {isOnline === true ? (
            <span className={'online'}>{isOnline}</span>
          ) : (
            <span className={'offline'}>{isOnline}</span>
          )}

          <img className={'avatar'} src={avatar} alt="User avatar" width="48" />
          <p className={'name'}>{name}</p>
        </li>
      ))}
    </ul>
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

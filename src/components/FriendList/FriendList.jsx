import PropTypes from 'prop-types';
import { Ulist } from './FriendList.style';
import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <Ulist>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.item}>
          {isOnline === true ? (
            <span className={css.online}>{isOnline}</span>
          ) : (
            <span className={css.ofline}>{isOnline}</span>
          )}

          <img className={'avatar'} src={avatar} alt="User avatar" width="48" />
          <p className={'name'}>{name}</p>
        </li>
      ))}
    </Ulist>
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

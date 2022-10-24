import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li key={id} className={css.item}>
      {isOnline === true ? (
        <span className={css.online}>{isOnline}</span>
      ) : (
        <span className={css.offline}>{isOnline}</span>
      )}

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

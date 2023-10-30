import { FriendListWrapper } from './friendList.styled';
import { FriendListItem } from './friendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </FriendListWrapper>
  );
};

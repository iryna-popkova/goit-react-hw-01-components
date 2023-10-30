import {
  FriendItem,
  FriendStatus,
  FriendImg,
  FriendName,
} from './friendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus
        statusType={isOnline}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></FriendStatus>
      <FriendImg src={avatar} alt={name} width="48" height="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

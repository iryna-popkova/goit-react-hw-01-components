import {ProfileWrapper, Description, UserImg, UserName, UserTag, UserLocation, ProfileStats, StatsLabel, StatsQuantity} from './profile.styled'

export const Profile = ({ username, tag, location, avatar, stats}) =>
{
  return (
<ProfileWrapper>
    <Description>
       <UserImg
          src={avatar}
          alt={username}
          width="120"
          height = "120"
       />
      <UserName>{username}</UserName>
      <UserTag>{'@'+tag}</UserTag>
      <UserLocation>{location}</UserLocation>

    </Description>

  <ProfileStats>
    <li>
      <StatsLabel>Followers </StatsLabel>
      <StatsQuantity>{stats.followers}</StatsQuantity>
    </li>
    <li>
      <StatsLabel>Views </StatsLabel>
      <StatsQuantity>{stats.views}</StatsQuantity>
    </li>
    <li>
     <StatsLabel>Likes </StatsLabel>
      <StatsQuantity>{stats.likes}</StatsQuantity>
    </li>
  </ProfileStats>
</ProfileWrapper>
  )
}



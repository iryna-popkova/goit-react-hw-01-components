import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-weight: 600;
  font-size: 18px;
  width: 330px;
  margin: auto;
`;
export const Description = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  background-color: cornflowerblue;
`;
export const UserImg = styled.img`
  border-radius: 50%;
  background: #D9D9D9;
  border: 6px solid #FFFFFF;
  background:mediumpurple
  border: 4px solid #white;
  margin-top:15px;
`;
export const UserName = styled.p`
  font-weight: 800;
  font-size: 24px;
  color: gold;
`;
export const UserTag = styled.p`
  color: white;
  text-decoration: underline;
`;
export const UserLocation = styled.p`
  font-weight: 500;
  color: pink;
`;
export const ProfileStats = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: yellow;
  border-radius: 20px;
  margin-top: 0;
`;
export const StatsLabel = styled.span`
  font-weight: 800;
  text-align: center;
  color: tomato;
`;
export const StatsQuantity = styled.span`
  font-weight: 700;
  color: cornflowerblue;
  text-align: center;
`;

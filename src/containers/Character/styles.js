import styled, {css} from "styled-components";

export const Container = styled.div`
  min-width: 400px;
  border: 1px solid #996633;
  padding: 12px 16px 24px 16px;
  background-color: #120804;
  color: #E3C290;
  font-size: 0.9rem;
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CharacterImage = styled.div`
  position: relative;
  width: 50%;
  //height: 0;
  //padding-bottom: 50%;
  height: 169px;
  overflow: hidden;
  border: 1px solid #644024;
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NameText = styled.h1`
  color: #FFC96F;
  font-weight: bold;
  font-family: 'S-CoreDream-3Light', 'M PLUS Rounded 1c', sans-serif;
  margin-bottom: 8px;
`;

export const SeasonText = styled.h1`
  color: #E3C290;
  font-size: 0.8rem;
  font-family: 'S-CoreDream-3Light', 'M PLUS Rounded 1c', sans-serif;
  margin-bottom: 8px;
`;

export const TablesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;


export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    height: 22px;
  }
  ${props => props.rarity && css`
      margin-bottom: 8px;
    `}
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const ProfileTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  gap: 12px;
`;

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
  width: 100%;
  //height: 0;
  //padding-bottom: 50%;
  height: 157px;
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
  font-family: 'S-CoreDream-3Light', sans-serif;
  margin-bottom: 8px;
`;

export const TablesWrap = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const PassivesWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-radius: 4px;
    background-color: rgba(18, 8, 4, 0.4);
    cursor: pointer;
  }
`;

export const PassiveText = styled.div`
  font-weight: bold;
  font-family: 'S-CoreDream-3Light', sans-serif;
  margin-left: 4px;
  word-spacing: -2px;
`;

export const Table = styled.table`
  width: ${(props) => (props.width ? props.width : "100%")};
  border: 1px solid #644024;
  margin-top: 12px;
  position: relative;
  > caption {
    font-family: 'S-CoreDream-3Light', sans-serif;
    font-weight: bold;
    color: #FFC96F;
    border: 1px solid #644024;
    padding: 2px;
  }
  th, td {
    padding: 4px 8px;
    text-align: center;
    box-sizing: border-box;
    background-color: #3C2716;
  }
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

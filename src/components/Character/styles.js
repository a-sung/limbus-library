import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #996633;
  padding: 12px 16px 24px 16px;
  background-color: #120804;
  color: #E3C290;
  font-size: 0.9rem;
`;

export const CharacterImage = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  border: 1px solid #644024;
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const NameText = styled.h1`
  color: #FFC96F;
  font-weight: bold;
  font-family: 'S-CoreDream-3Light', sans-serif;
  margin-bottom: 8px;
`;

export const TablesWrap = styled.div`
  > div:first-child {
    display: flex;
    justify-content: space-between;
  }
`;

export const Table = styled.table`
  ${(props) => (props.width ? props.width : "100%")};
  border: 1px solid #644024;
  margin-top: 12px;
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
  width: 24px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  > img {
    height: 22px;
  }
`;

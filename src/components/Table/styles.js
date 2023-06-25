import styled, {css} from "styled-components";

export const Table = styled.table`
  width: ${(props) => (props.width ? props.width : "100%")};
  //margin-top: 12px;
  border: 1px solid #644024;
  position: relative;
  caption {
  font-family: 'S-CoreDream-3Light', 'M PLUS Rounded 1c', sans-serif;
  font-weight: bold;
  color: #FFC96F;
  border: 1px solid #644024;
  padding: 4px 2px;
  }
  tr {
    background-color: #3C2716;
  }
  th, td {
    max-width: 97px;
    padding: 4px;
    text-align: center;
    box-sizing: border-box;
    background-color: #3C2716;
    >div {
      display: flex;
      justify-content: center;
      align-items: center;
      >img {
        height: 22px;
      }
    }
  }
  p {
    font-weight: bold;
    font-family: 'S-CoreDream-3Light', 'M PLUS Rounded 1c', sans-serif;
    word-spacing: -2px;
    margin-left: 4px;
    margin-top: 6px;
    padding-bottom: 4px;
  }
`;


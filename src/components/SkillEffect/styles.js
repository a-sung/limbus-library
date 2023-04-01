import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 100%;
  left: -1px;
  width: 366px;
  z-index: 3;
  border: 1px solid #644024;
  text-align: start;
  padding: 8px;
  background-color: #120804;
  white-space: pre-wrap;
  line-height: 1.2rem;
`;

export const SKillNameText = styled.div`
  //font-family: 'S-CoreDream-3Light', 'M PLUS Rounded 1c', sans-serif;
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const SkillText = styled.div`
  display: flex;
  gap: 4px;
  font-family: sans-serif;
  > div:last-child {
    flex-basis: 0;
    flex-grow: 1;
  }
`;

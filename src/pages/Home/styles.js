import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 20px;
  border: 2px solid #996633;
  font-family: 'S-CoreDream-3Light', 'M PLUS Rounded 1c', sans-serif;
  font-weight: bold;
  font-size: 0.9rem;
`;

export const CharacterSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px 28px;
  margin: 60px 0;
`;

import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 0;
`;

export const Title = styled.h1`
  font-family: 'S-CoreDream-3Light', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.yellow};
`;

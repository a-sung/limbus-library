import styled, {css} from 'styled-components'

export const Container = styled.div`
  padding: 40px 0;
`;

export const Title = styled.h1`
  font-family: 'S-CoreDream-3Light', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const LanguageWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightBrown};
`;

export const LanguageButton = styled.button`
  font-weight: bold;
  padding: 0 4px;
  ${props => props.active && css`
      font-weight: bold;
      color: ${({ theme }) => theme.colors.yellow};
    `}
`;

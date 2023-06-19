import styled, {css} from "styled-components";

export const Text = styled.div`
  font-family: 'S-CoreDream-3Light', 'M PLUS Rounded 1c', sans-serif;
  ${props => props.title && css`
    color: #FFC96F;
    font-weight: bold;
  `}
  ${props => props.subtitle && css`
    
  `}
  ${props => props.shadow && css`
    
  `}
  ${props => props.border && css`
    
  `}
`;
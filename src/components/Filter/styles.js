import styled from 'styled-components'


export const FilterTitle = styled.h1`
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.lightBrown};
  color: ${({ theme }) => theme.colors.beige};
  display: inline-block;
  margin: 8px 0;
  padding: 3px 24px 3px 8px;
  clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
`;

export const LabelWrap = styled.form`
  display: flex;
  gap: 16px 3px;
  flex-wrap: wrap;
  margin-top: 3px;
`;

export const Label = styled.label`
  -webkit-box-shadow: inset 2px 4px 6px -1px rgba(65,56,45,0.6);
  box-shadow: inset 2px 4px 6px -1px rgba(65,56,45,0.6);
  background-color: ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.darkBrown};
  border: 2px solid rgba(65,56,45);
  padding: 2px 12px;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 0;
  &[type="checkbox"]:checked + ${Label} {
    color: ${({ theme }) => theme.colors.yellow};
    background: ${({ theme }) => theme.colors.darkBrown};
    border: 2px solid ${({ theme }) => theme.colors.yellow};;
  }
  &[type="checkbox"]:focus + ${Label} {
    border: 2px solid ${({ theme }) => theme.colors.yellow};;
  }
`;


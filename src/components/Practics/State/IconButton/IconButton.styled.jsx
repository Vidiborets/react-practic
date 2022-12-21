import styled from '@emotion/styled';
export const Button = styled.button`
  margin: 0;
  padding: ${props => props.theme.space[3]}px;
  border: none;
  border-radius: ${props => props.theme.radii.round};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.green};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${props => props.theme.colors.red};
  }
`;

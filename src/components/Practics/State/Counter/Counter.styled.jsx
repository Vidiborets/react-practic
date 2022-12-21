import styled from '@emotion/styled';
export const Button = styled.button`
  padding: ${props => props.theme.space[3]}px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.normal};
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;
export const Text = styled.span`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

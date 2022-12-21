import styled from '@emotion/styled';
export const Button = styled.button`
  width: ${props => props.theme.space[7]}px;
  cursor: pointer;
  padding-left: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  outline: none;
  border: none;
  border-radius: ${props => props.theme.radii.normal};
  &:hover {
    background-color: ${props => props.theme.colors.secondaryText};
    color: ${props => props.theme.colors.white};
  }
`;
export const Input = styled.input`
  width: ${props => props.theme.space[8]}px;
  outline: none;
  border: none;
  padding-left: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.normal};
  margin-bottom: ${props => props.theme.space[4]}px;
`;

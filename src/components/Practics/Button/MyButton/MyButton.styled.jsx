import styled from '@emotion/styled';

export const MybuttonStyle = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: ${prop =>
    prop.disabled ? prop.theme.colors.muted : prop.theme.colors.blue};
  padding-top: ${prop => prop.theme.space[3]}px;
  padding-bottom: ${prop => prop.theme.space[3]}px;
  padding-left: ${prop => prop.theme.space[4]}px;
  padding-right: ${prop => prop.theme.space[4]}px;
  gap: ${props => props.theme.space[2]}px;
  cursor: pointer;
  border: ${props => props.theme.borders.normal};
  border-radius: ${prop => prop.theme.radii.normal};
  color: ${props => props.theme.colors.white};
  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

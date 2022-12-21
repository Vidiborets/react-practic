import styled from '@emotion/styled';
export const FilterItem = styled.input`
  width: ${props => props.theme.space[8]}px;
  outline: none;
  border: none;
  padding-left: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.normal};
  margin-top: ${props => props.theme.space[4]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
`;

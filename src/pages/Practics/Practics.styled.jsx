import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.space[4]}px;
    list-style: none;
  a {
    color: ${props => props.theme.colors.primaryText};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.red};
    }
`;

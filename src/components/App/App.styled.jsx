import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  & li:not(:last-child) {
    margin-right: ${props => props.theme.space[4]}px;
  }
  a {
    color: ${props => props.theme.colors.primaryText};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.red};
    }
  }
`;

import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  list-style: none;
`;
export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

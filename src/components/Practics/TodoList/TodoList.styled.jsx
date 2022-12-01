import styled from '@emotion/styled';
export const TodoListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border: ${props => props.theme.borders.normal};
`;
export const TodoListText = styled.p`
  margin-right: 5px;
`;

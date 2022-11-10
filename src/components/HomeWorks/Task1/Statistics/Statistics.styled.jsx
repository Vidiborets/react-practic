import styled from '@emotion/styled';

export const Title = styled.h2`
  padding-top: ${props => props.theme.space[5]}px;
  padding-bottom: ${props => props.theme.space[5]}px;
  text-transform: uppercase;
`;
export const List = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
`;
export const ListItem = styled.li`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 20%;
  padding: ${props => props.theme.space[3]}px;
  border: ${props => props.theme.borders.normal};
`;

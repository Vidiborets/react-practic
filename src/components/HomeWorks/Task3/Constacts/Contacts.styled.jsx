import styled from '@emotion/styled';
export const Item = styled.li`
  display: flex;
`;
export const Text = styled.p`
  &:not(:last-child) {
    margin-right: ${props => props.theme.space[3]}px;
  }
`;

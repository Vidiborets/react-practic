import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  border: ${props => props.theme.borders.normal};
  padding-left: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[6]}px;
  padding-top: ${props => props.theme.space[2]}px;
  padding-bottom: ${props => props.theme.space[2]}px;
  background-color: ${props => props.theme.colors.white};
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
`;
export const Status = styled.span`
  width: ${props => props.theme.space[4]}px;
  height: ${props => props.theme.space[4]}px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin-right: ${props => props.theme.space[3]}px;
`;
export const Image = styled.img`
  margin-right: ${props => props.theme.space[3]}px;
`;
export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

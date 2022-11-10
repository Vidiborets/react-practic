import styled from '@emotion/styled';

export const Image = styled.img`
  display: block;
  max-width: 150px;
  height: auto;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.space[5]}px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 33.333%;
  flex-direction: column;
  display: flex;
  text-align: center;
  background-color: ${props => props.theme.colors.backgroundColor};
  padding: ${props => props.theme.space[3]}px;
  border-top: ${props => props.theme.borders.normal};

  &:not(:last-child) {
    border-right: ${props => props.theme.borders.normal};
  }
  &:nth-of-type(1) {
    border-bottom-left-radius: ${props => props.theme.radii.big};
  }
  &:last-child {
    border-bottom-right-radius: ${props => props.theme.radii.big};
  }
`;
export const TextName = styled.p`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.ms};
  margin-bottom: ${props => props.theme.space[3]}px;
`;
export const Text = styled.p`
  color: ${props => props.theme.colors.secondaryText};
  text-align: center;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
`;
export const TextItem = styled.span`
  color: ${props => props.theme.colors.secondaryText};
`;
export const TextStats = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.ms};
`;

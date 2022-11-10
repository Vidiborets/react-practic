import styled from '@emotion/styled';
export const Card = styled.div`
  position: relative;
  border: ${props => props.theme.borders.stand};
  padding: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.normal}px;
`;
export const Title = styled.h2`
  margin-top: ${props => props.theme.space[0]};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 24px;
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: ${props => props.theme.space[0]};
  margin-bottom: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.primaryText};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 24px;
  font-weight: ${props => props.theme.fontWeights.normal};
  letter-spacing: 0.25px;
  svg {
    display: block;
    margin-right: ${props => props.theme.space[3]}px;
    color: ${props => props.theme.colors.secondaryText};
  }
`;

const switchColor = ({ eventType, theme }) => {
  switch (eventType) {
    case 'free':
      return theme.colors.green;
    case 'paid':
      return theme.colors.blue;
    case 'vip':
      return theme.colors.red;
    default:
      return theme.colors.black;
  }
};

export const Chip = styled.span`
  position: absolute;
  top: ${props => props.theme.space[2]}px;
  right: ${props => props.theme.space[2]}px;
  padding: ${props => props.theme.space[2]}px ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.normal}px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  background-color: ${switchColor};
`;

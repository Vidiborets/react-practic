import { MybuttonStyle } from './MyButton.styled';
export const MyButoon = ({
  type = 'button',
  children,
  disabled = false,
  icon: Icon = null,
}) => {
  return (
    <MybuttonStyle disabled={disabled} type={type}>
      {Icon && <Icon />}
      {children}
    </MybuttonStyle>
  );
};

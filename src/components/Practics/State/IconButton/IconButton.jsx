import { Button } from './IconButton.styled';
export const IconButton = ({ children, onClick, allProps }) => (
  <Button type="button" onClick={onClick} {...allProps}>
    {children}
  </Button>
);

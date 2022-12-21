import { MaterialCard } from '..';
export const MaterialList = ({ items, ...otherProps }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <MaterialCard item={item} {...otherProps} />
        </li>
      ))}
    </ul>
  );
};

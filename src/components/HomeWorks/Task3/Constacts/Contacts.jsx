import { Item, Text } from './Contacts.styled';
export const Contacts = ({ title, options, onClick }) => {
  return (
    <ul>
      <h3>{title}</h3>
      {options.map(({ name, id, number }) => (
        <Item key={id}>
          <Text>{name}</Text>
          <Text>{number}</Text>
          <button
            type="button"
            onClick={() => {
              onClick(id);
            }}
          >
            Удалить
          </button>
        </Item>
      ))}
    </ul>
  );
};

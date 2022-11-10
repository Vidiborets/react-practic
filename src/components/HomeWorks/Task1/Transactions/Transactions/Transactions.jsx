import { TableItem } from './Transactions.styled';
export const Transactions = ({ id, amount, currency, type }) => {
  return (
    <tr key={id}>
      <TableItem>{type}</TableItem>
      <TableItem>{amount}</TableItem>
      <TableItem>{currency}</TableItem>
    </tr>
  );
};

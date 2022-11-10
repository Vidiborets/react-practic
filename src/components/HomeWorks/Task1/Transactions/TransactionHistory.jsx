import { Transactions } from './Transactions/Transactions';
import { TableItem } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <TableItem>Type</TableItem>
          <TableItem>Amount</TableItem>
          <TableItem>Currency</TableItem>
        </tr>
      </thead>
      <tbody>
        {items.map(({ amount, currency, id, type }) => (
          <Transactions
            amount={amount}
            currency={currency}
            id={id}
            key={id}
            type={type}
          />
        ))}
      </tbody>
    </table>
  );
};

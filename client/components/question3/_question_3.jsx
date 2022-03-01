import { useContext, useState, useEffect } from 'react';
import { Transaction } from './Transaction';
import { ApiContext } from '../../utils/api_context';

export const Question3 = () => {
  const api = useContext(ApiContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(async () => {
    const { transactions } = await api.get('/transactions');
    setTransactions(transactions);
  }, []);

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <Transaction transaction={transaction}/>
        </div>
      ))}
    </div>
  );
};

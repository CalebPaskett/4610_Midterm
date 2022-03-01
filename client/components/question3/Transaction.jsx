export const Transaction = ({ transaction }) => {
  return (
    <div>
      <div className="pt-2 pl-4 pb-2 pr-4 font-bold text-yellow-500">
        ${transaction.amount}  
      </div>
      <div className="pt-2 pl-4 pb-2 pr-4 font-bold">
        To {transaction.toUser.name}, from {transaction.fromUser.name}               
      </div>
    </div>
  );
};
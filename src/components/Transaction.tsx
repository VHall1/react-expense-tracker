import * as React from "react";
import {
  Transaction as TransactionProps,
  useGlobalContext,
} from "../context/GlobalState";

export const Transaction: React.FC<TransactionProps> = ({
  amount,
  text,
  id,
}) => {
  const { deleteTransaction } = useGlobalContext();

  return (
    <li className={amount > 0 ? "plus" : "minus"}>
      {text}
      <span>${Math.abs(amount)}</span>
      <button onClick={() => deleteTransaction!(id)} className="delete-btn">
        x
      </button>
    </li>
  );
};

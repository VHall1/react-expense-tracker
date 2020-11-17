import React, { useContext } from "react";
import {
  GlobalContext,
  Transaction as TransactionProps,
} from "../context/GlobalState";

export const Transaction: React.FC<TransactionProps> = ({
  amount,
  text,
  id,
}) => {
  const { deleteTransaction } = useContext(GlobalContext);

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

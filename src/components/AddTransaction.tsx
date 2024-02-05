import * as React from "react";
import { v4 } from "uuid";
import { useGlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useGlobalContext();

  const [text, setText] = React.useState<string>("");
  const [amount, setAmount] = React.useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTransaction = {
      id: v4(),
      amount: Number(amount),
      text,
    };

    setText("");
    setAmount("");
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

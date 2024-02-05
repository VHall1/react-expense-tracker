import * as React from "react";
import AppReducer from "./AppReducer";

export interface Transaction {
  id: string;
  text: string;
  amount: number;
}

const GlobalContext = React.createContext<{
  transactions: Transaction[];
  deleteTransaction: (id: string) => void;
  addTransaction: (transaction: Transaction) => void;
} | null>(null);

export const GlobalProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(AppReducer, {
    transactions: [],
  });

  const deleteTransaction = (id: string) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction: Transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const ctx = React.useContext(GlobalContext);

  if (!ctx) {
    throw new Error("useGlobalContext must be used within GlobalProvider");
  }

  return ctx;
};

import React, { PropsWithChildren, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export interface Transaction {
  id: string;
  text: string;
  amount: number;
}

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext<{
  transactions: Transaction[];
  deleteTransaction?: (id: string) => void;
  addTransaction?: (transaction: Transaction) => void;
}>(initialState);

export const GlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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

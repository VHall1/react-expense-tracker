import type { Transaction } from "./GlobalState";

type State = {
  transactions: Transaction[];
};

type Action =
  | { type: "DELETE_TRANSACTION"; payload: string }
  | { type: "ADD_TRANSACTION"; payload: Transaction };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: Transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default reducer;

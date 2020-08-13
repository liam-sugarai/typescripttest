import {
  ExpenseActionTypes,
  ADD_EXPENSE,
  REMOVE_EXPENSE
} from "../../types/actions";

const initialState: Expense[] = [
  { expense: 'note1' }, 
  { expense: 'note2' }, 
  { expense: 'note3' }
];

const expenseReducer = (
  state = initialState,
  action: ExpenseActionTypes
): Expense[] => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];
    case REMOVE_EXPENSE:
      return state.filter(({ expense }) => expense !== action.expense);
    default:
      return state;
  }
};

export { expenseReducer };

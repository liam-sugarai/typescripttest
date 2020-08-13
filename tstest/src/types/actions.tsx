export const ADD_EXPENSE = "ADD_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";

export interface AddExpenseAction {
  type: typeof ADD_EXPENSE;
  expense: Expense;
}

export interface RemoveExpenseAction {
  type: typeof REMOVE_EXPENSE;
  expense: string;
}

export type ExpenseActionTypes = AddExpenseAction | RemoveExpenseAction;

export type AppActions = ExpenseActionTypes;
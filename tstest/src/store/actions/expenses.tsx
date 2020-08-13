import { Dispatch, Action } from "redux";
import { AppState } from "../index";
import { ThunkAction } from 'redux-thunk';
import { ADD_EXPENSE, REMOVE_EXPENSE, AppActions } from '../../types/actions';

export const addExpense = (expense: Expense): AppActions => ({
  type: ADD_EXPENSE,
  expense
});

export const removeExpense = (expense: string): AppActions => ({
  type: REMOVE_EXPENSE,
  expense
});

// export const startAddExpense = (expense: string) => {
//   console.log(expense, "<< first layer");
//   return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
//     console.log(expense, "<< second layer");
//     return dispatch(addExpense({expense})
//     );
//   };
// };

export function startAddExpense (expense: string): ThunkAction<void, AppState, void, Action> {
    console.log(expense, "<< first layer");
  return async (dispatch) => {
    console.log(expense, "<< second layer");
    await dispatch({
      type: ADD_EXPENSE,
      expense
    });
  };
}


export const startRemoveExpense = (expense: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(removeExpense(expense));
  };
};




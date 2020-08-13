import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from '../../store/index';
import { AppActions } from '../../types/actions';
import { startAddExpense } from '../../store/actions/expenses';

import { AddExpenseForm } from '../../components/AddExpenseForm/index';
import { ExpenseList } from '../../components/ExpenseList/index';

interface ReduxProps {
  expense: Expense;
}

interface ReduxState {
  expenses: Expense[];
}

const Redux: React.FunctionComponent<ReduxState> = (props) => {

  const addExpense: AddExpense = (expense: string) => {
    startAddExpense(expense);
  };

  return (
    <React.Fragment>
      <a href="/normal">Normal</a>
      <AddExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={props.expenses} />
    </React.Fragment>
  );
};

interface LinkStateProps {
  expenses: Expense[];
}
interface LinkDispatchProps {
  startAddExpense: (expense: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: ReduxProps
): LinkStateProps => ({
  expenses: state.expenses
});

const mapDispatchToProps = (
  dispatch: any,
  ownProps: ReduxProps
): LinkDispatchProps => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
  };
};

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<any, any, AppActions>,
//   ownProps: ReduxProps
// ): LinkDispatchProps => ({
//   startAddExpense: bindActionCreators(startAddExpense, dispatch),
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redux);


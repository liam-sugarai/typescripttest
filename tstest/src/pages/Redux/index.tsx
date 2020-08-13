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
  myStartAddExpense: (expense: string) => {};
}

const Redux: React.FunctionComponent<ReduxState> = (props) => {

  const { myStartAddExpense } = props;

  const addExpense: AddExpense = (expense: string) => {
    myStartAddExpense(expense);
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
  myStartAddExpense: (expense: string) => void;
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
    myStartAddExpense: (expense) => dispatch(startAddExpense(expense)),
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


import React from 'react';

interface ExpenseItemProps {
  expense: Expense;
}

export const ExpenseItem: React.FunctionComponent<ExpenseItemProps> = ({ expense }) => {
  return (
    <React.Fragment>
      <li>{expense.expense}</li>
    </React.Fragment>
  );
};
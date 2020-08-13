import React from "react";
import { ExpenseItem } from "../ExpenseItem/index";

interface ExpenseListProps {
  expenses: Array<Expense>;
}

export const ExpenseList: React.FunctionComponent<ExpenseListProps> = ({ expenses }) => {
  return (
    <React.Fragment>
      <ul>
        {expenses.map((expense, id) => (
          <ExpenseItem key={id} expense={expense} />
        ))}
      </ul>
    </React.Fragment>
  );
};

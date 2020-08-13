import React, { useState, ChangeEvent, FormEvent } from 'react';

interface NewExpenseInputProps {
  addExpense: AddExpense;
}

export const AddExpenseForm: React.FunctionComponent<NewExpenseInputProps> = ({ addExpense }) => {
  
  const [expense, setExpense] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExpense(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addExpense(expense);
    setExpense("");
  };

  return (
    <form>
      <input onChange={handleChange} value={expense} type="text" name="note" placeholder="note" />
      <button type="submit" onClick={handleSubmit}>Add Note</button>
    </form>
  );
};
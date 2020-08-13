type Todo = {
  text: string;
  complete: boolean;
};

type Note = {
  note: string;
}

type Expense = {
  expense: string;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type AddNote = (note: string) => state.note;

type AddExpense = (expense: string) => void;

declare module 'react-redux';
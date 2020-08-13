import React, { useState } from "react";
import { TodoList } from "../../components/TodoList/index";
import { AddTodoForm } from "../../components/AddTodoForm";
import { NoteList } from "../../components/NoteList";
import { AddNoteForm } from "../../components/AddNoteForm";

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false },
];

const initialNotes: Array<Note> = [
  { note: "123456" },
  { note: "testing Note" },
];

const Normal: React.FunctionComponent = () => {
  
  const [todos, setTodos] = useState(initialTodos);
  const [notes, setNotes] = useState(initialNotes);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  const addNote: AddNote = (note: string) => {
    setNotes([...notes, { note: note }]);
  };

  return (
    <React.Fragment>
      <a href='/redux'>Redux</a>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
      <hr />
      <NoteList notes={notes} />
      <AddNoteForm addNote={addNote} />
    </React.Fragment>
  );
};

export default Normal;

import React, { useState, ChangeEvent, FormEvent } from 'react'

interface NewNoteInputProps {
  addNote: AddNote;
}

export const AddNoteForm: React.FunctionComponent<NewNoteInputProps> = ({ addNote }) => {
  
  const [note, setNote] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addNote(note);
    setNote("");
  };

  return (
    <form>
      <input onChange={handleChange} value={note} type="text" name="note" placeholder="note" />
      <button type="submit" onClick={handleSubmit}>Add Note</button>
    </form>
  );
};
import React from 'react'

interface NoteItemProps {
  note: Note;
}

export const NoteItem: React.FunctionComponent<NoteItemProps> = ({ note }) => {
  return (
    <React.Fragment>
      <li>{note.note}</li>
    </React.Fragment>
  );
};
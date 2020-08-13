import React from "react";
import { NoteItem } from "../NoteItem/index";

interface NoteListProps {
  notes: Array<Note>;
}

export const NoteList: React.FunctionComponent<NoteListProps> = ({ notes }) => {
  return (
    <React.Fragment>
      <ul>
        {notes.map((note, id) => (
          <NoteItem key={id} note={note} />
        ))}
      </ul>
    </React.Fragment>
  );
};

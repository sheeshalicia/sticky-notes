import React from "react";
import Note from "./Note.js";

//In the NotesList component, pass a note object
//in the notes array to each Note component by
//mapping over props.notes. As you map over
//this array, render a Note component for each
//object in the notes array that is passed to
//the NotesList component.

//change it from:
/*const NotesList = () => (
  <ul className="notes-list">

    <Note />
    <Note />
    <Note />
  </ul>
);*/
//to:
const renderNote = (note) => <Note note={note} key={note.id} />;

const NotesList = (props) => {
  const noteElements = props.notes.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;

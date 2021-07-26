import React from "react";

const Note = () => (
  <li className="note">
    <input type="text" className="note__title" placeholder="Title" />
    <textarea className="note__description" placeholder="Description..." />
    <span className="note__delete">X</span>
  </li>
);

export default Note;

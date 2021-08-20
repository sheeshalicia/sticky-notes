import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: "search text"
  };

  render() {
    return (
      <div>
        <Header searchText={this.state.searchText} addNew={this.state.addNew} />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}
export default App;
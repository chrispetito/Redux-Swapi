import React, { Component } from "react";

import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
    <div>
      <nav className='nav-bar'>STAR WARS</nav>
    <CharacterListView />;
    </div>
    )
  }
}

export default App;

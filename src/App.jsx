import { useState } from "react";
import Board from "./component/Board";
import Game from "./component/Game";

function App() {
  return (
    <div className="App">
      <Game/>
      <Board/>
    </div>
  );
}

export default App;

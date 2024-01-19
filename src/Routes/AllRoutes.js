import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "../Homepage/Homepage/Homepage";
import Tictactoe from "../Games/Tictactoe/tictactoe";
import BrickBreakout from "../Games/BrickBreakout/BrickBreakout";
import Typo from "../Games/Typo/Typo";
import Tetris from "../Games/tetris/src/components/Tetris";
import Minesweeper from "../Games/Minesweeper/App";
function AllRoutes() {
  return (
    <Routes>
      {/* Add all the routes with the right path here after importing them  */}
      <Route path="/" element={<Homepage />} />
      <Route path="/Tic" element={<Tictactoe />} />
      <Route path="/brick-breakout" element={<BrickBreakout />} />
      <Route path="/typo" element={<Typo />} />
      <Route path="/tetris" element={<Tetris />} />
      <Route path="/Minesweeper" element={<Minesweeper/>}/>
    </Routes>
  );
}

export default AllRoutes;

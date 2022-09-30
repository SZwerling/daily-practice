import Home from "./components/Home";
import FavoritePage from "./components/FavoritePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/:drinkId" element={<FavoritePage/>}></Route>
         </Routes>
      </Router>
   );
}

export default App;

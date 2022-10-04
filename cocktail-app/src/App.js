import Home from "./components/Home";
import FavoritePage from "./components/FavoritePage";

import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/special/:drinkId" element={<FavoritePage/>}></Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;

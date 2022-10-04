import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockOverviewPage from "./pages/StockOverviewPage";
import StockDetailPage from "./pages/StockDetailPage";
import "./App.css";

function App() {
   return (
      <main>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<StockOverviewPage />} />
               <Route path="/detail/:symbol" element={<StockDetailPage />} />
            </Routes>
         </BrowserRouter>
      </main>
   );
}

export default App;

// finhub api: cctrcu2ad3i78dc6rt50cctrcu2ad3i78dc6rt5g

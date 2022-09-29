import Drinks from "./components/Drinks";
import FavoritePage from "./components/FavoritePage";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import "./App.css";

function App() {
   return (
      <main>
         <Search />
         <Drinks />
         <FavoritePage />
         <Favorites />
      </main>
   );
}

export default App;

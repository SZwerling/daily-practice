import Favorites from "./Favorites";
import Search from "./Search";
import Drinks from "./Drinks";

const Home = () => {
   return (
      <main>
         <Search />
         <Favorites />
         <Drinks />
      </main>
   );
};

export default Home;
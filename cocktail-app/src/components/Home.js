import Collection from "./Collection";
import Search from "./Search";
import Drinks from "./Drinks";
import { useGlobalContext } from "../context";




const Home = () => {
   const {collection} = useGlobalContext() 
   return (
      <main>
         <Search />
        {collection.length > 0 && <Collection />}
         <Drinks />
      </main>
   );
};

export default Home;


// {favorites.length > 0 && <Favorites /> }
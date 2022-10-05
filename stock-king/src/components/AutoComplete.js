import { useState, useEffect, useContext } from "react";
import finnHub from "../apis/finnHub";
import { WatchListContext } from "../context/watchListContext";

//     /search?q=apple

const AutoComplete = () => {
   const [search, setSearch] = useState("");
   const [results, setResults] = useState([]);
   const { addStock } = useContext(WatchListContext)

   const renderDropdown = () => {
      const dropDownClass = search ? "show" : null;
      return (
         <ul
            style={{
               height: "500px",
               overflowY: "scroll",
               overflowX: "hidden",
               cursor: "pointer",
            }}
            className={`dropdown-menu ${dropDownClass}`}
         >
            {results.map((item) => {
               return (
                  <li onClick={() => {
                    addStock(item.symbol)
                    setSearch('')
                  }} className="dropdown-item" key={item.displaySymbol}>
                     {item.description} ({item.symbol})
                  </li>
               );
            })}
         </ul>
      );
   };

   useEffect(() => {
      let isMounted = true;
      const fetchData = async () => {
         try {
            const response = await finnHub.get("/search", {
               params: {
                  q: search,
               },
            });

            console.log(response);
            if (isMounted) {
               setResults(response.data.result);
            }
         } catch (error) {
            console.log(error);
         }
      };
      if (search.length > 0) {
         fetchData();
      } else {
         setResults([]);
      }
      return () => (isMounted = false);
   }, [search]);

   return (
      <div className="w-50 p-5">
         <div className="form-floating dropdown">
            <input
               style={{ backgroundColor: "rgba(145, 158, 171, 0.04)" }}
               id="search"
               type="text"
               className="form-control"
               placeholder="search"
               autoComplete="off"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            ></input>
            <label htmlFor="search">Search</label>
            {renderDropdown()}
         </div>
      </div>
   );
};

export default AutoComplete;

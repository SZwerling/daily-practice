import { createContext, useState } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
   const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "MRVI"]);

   const addStock = (stock) => {
      if (!watchList.includes(stock)) {
         setWatchList([...watchList, stock]);
      }
   };

   const deleteStock = (stock) => {
      setWatchList(
         watchList.filter((item) => {
            return item !== stock;
         })
      );
   };

   return (
      <WatchListContext.Provider value={{ watchList, addStock, deleteStock }}>
         {props.children}
      </WatchListContext.Provider>
   );
};

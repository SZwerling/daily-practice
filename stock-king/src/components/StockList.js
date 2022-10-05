import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import finnHub from "../apis/finnHub";
import {
   BsFillCaretDownFill,
   BsFillCaretUpFill,
   BsSearch,
} from "react-icons/bs";
import { WatchListContext } from "../context/watchListContext";

const StockList = () => {
   const [stock, setStock] = useState([]);
   const { watchList } = useContext(WatchListContext);
   const navigate = useNavigate();

   const changeColor = (num) => {
      return num > 0 ? "success" : "danger";
   };

   const renderIcon = (num) => {
      return num > 0 ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />;
   };

   useEffect(() => {
      let isMounted = true;
      const fetchData = async () => {
         try {
            const responses = await Promise.all(
               watchList.map((stock) => {
                  return finnHub.get("/quote", {
                     params: {
                        symbol: stock,
                     },
                  });
               })
            );

            const data = responses.map((response) => {
               return {
                  data: response.data,
                  symbol: response.config.params.symbol,
               };
            });

            if (isMounted) {
               setStock(data);
            }
         } catch (error) {}
      };

      fetchData();
      return () => (isMounted = false);
   }, [watchList]);

   const handleStockSelect = (symbol) => {
      navigate(`detail/${symbol}`);
   };

   return (
      <div>
         <table className="table hover mt-5">
            <thead style={{ color: "rgb(79, 89, 102)" }}>
               <tr>
                  <th scope="col">name</th>
                  <th scope="col">last</th>
                  <th scope="col">chg</th>
                  <th scope="col">chg%</th>
                  <th scope="col">high</th>
                  <th scope="col">low</th>
                  <th scope="col">open</th>
                  <th scope="col">close</th>
               </tr>
            </thead>
            <tbody>
               {stock.map((stockData) => {
                  return (
                     <tr
                        onClick={() => handleStockSelect(stockData.symbol)}
                        style={{ cursor: "pointer" }}
                        className="table-row"
                        key={stockData.symbol}
                     >
                        <th>{stockData.symbol}</th>
                        <td>{stockData.data.c}</td>
                        <td className={`text-${changeColor(stockData.data.d)}`}>
                           {stockData.data.d}
                           {renderIcon(stockData.data.d)}
                        </td>
                        <td
                           className={`text-${changeColor(stockData.data.dp)}`}
                        >
                           {stockData.data.dp}
                           {renderIcon(stockData.data.dp)}
                        </td>
                        <td>{stockData.data.h}</td>
                        <td>{stockData.data.l}</td>
                        <td>{stockData.data.o}</td>
                        <td>{stockData.data.pc}</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
};

export default StockList;

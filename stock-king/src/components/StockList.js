import { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";

const StockList = () => {
   const [stock, setStock] = useState([]);
   const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

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

            console.log(responses);
            const data = responses.map((response) => {
                return {
                    data: response.data,
                    symbol: response.config.params.symbol
                }
            })
            console.log(data)
            if (isMounted) {
               setStock(data);
            }
         } catch (error) {}
      };
      fetchData();
      return () => (isMounted = false);
   }, []);


   return <div>
        <table className="table hover mt-5">
            <thead style={{color: "rgb(79, 89, 102)"}}>
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
                        <tr className="table-row" key={stockData.symbol}>
                            <th>{stockData.symbol}</th>
                            <td>{stockData.data.c}</td>
                            <td>{stockData.data.d}</td>
                            <td>{stockData.data.dp}</td>
                            <td>{stockData.data.h}</td>
                            <td>{stockData.data.l}</td>
                            <td>{stockData.data.o}</td>
                            <td>{stockData.data.pc}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
   </div>;
};

export default StockList;

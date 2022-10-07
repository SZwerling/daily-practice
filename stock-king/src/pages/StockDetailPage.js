import finnHub from "../apis/finnHub";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import StockChart from "../components/StockChart";

const formatData = (data) => {
   return data.t.map((el, index) => {
      return {
         x: el * 1000,
         y: data.c[index],
      };
   });
};

const StockDetailPage = () => {
   const { symbol } = useParams();
   const [chartData, setChartData] = useState();

   useEffect(() => {
      const fetchData = async () => {
         const date = new Date();
         const currentTime = Math.floor(date.getTime() / 1000); //getTime returns milliseconds and api wants seconds, hence divide by 1000 and floor
         let oneDayAgo = currentTime - 60 * 60 * 24;
         if (date.getDay() === 6) {
            oneDayAgo = currentTime - 2 * 60 * 60 * 24;
         }
         if (date.getDay() === 0) {
            oneDayAgo = currentTime - 3 * 60 * 60 * 24;
         }
         const oneWeek = currentTime - 7 * 60 * 60 * 24;
         const oneYear = currentTime - 365 * 60 * 60 * 24;
         const responses = await Promise.all([
            finnHub.get("/stock/candle", {
               params: {
                  symbol,
                  from: oneDayAgo,
                  to: currentTime,
                  resolution: 30,
               },
            }),
            finnHub.get("/stock/candle", {
               params: {
                  symbol,
                  from: oneWeek,
                  to: currentTime,
                  resolution: "D",
               },
            }),
            finnHub.get("/stock/candle", {
               params: {
                  symbol,
                  from: oneYear,
                  to: currentTime,
                  resolution: "W",
               },
            }),
         ]);

         setChartData({
            day: formatData(responses[0].data),
            week: formatData(responses[1].data),
            year: formatData(responses[2].data),
         });
      };
      fetchData();
   }, [symbol]);

   return (
      <div>
         {chartData && (
            <div>
               <StockChart chartData={chartData} symbol={symbol} />
            </div>
         )}
      </div>
   );
};

export default StockDetailPage;

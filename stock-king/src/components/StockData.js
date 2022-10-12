import { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";

const StockData = ({ symbol }) => {
   const [companyInfo, setCompanyInfo] = useState({});

   useEffect(() => {
      let isMounted = true;
      const fetchData = async () => {
         try {
            const response = await finnHub.get("/stock/profile2", {
               params: {
                  symbol,
               },
            });
            
            setCompanyInfo(response.data);
         } catch (error) {
            console.log(error);
         }
      };
      if (isMounted) {
         fetchData();
      }
      return () => (isMounted = false);
   }, [symbol]);

   return (
      <div>
         {companyInfo && (
            <div className="row border bg-white rounded shadow-sm p-4 mt-5 mb-2">
               <div className="col-sm">
                  <div>
                     <span className="fw-bold">Name: </span>
                     {companyInfo.name}
                  </div>
                  <div>
                     <span className="fw-bold">Country: </span>
                     {companyInfo.country}
                  </div>
                  <div>
                     <span className="fw-bold">Ticker: </span>
                     {companyInfo.ticker}
                  </div>
               </div>
               <div className="col-sm">
                  <div>
                     <span className="fw-bold">Exchange: </span>
                     {companyInfo.exchange}
                  </div>
                  <div>
                     <span className="fw-bold">Industry: </span>
                     {companyInfo.finnhubIndustry}
                  </div>
                  <div>
                     <span className="fw-bold">IPO: </span>
                     {companyInfo.ipo}
                  </div>
               </div>
               <div className="col-sm">
                  <div>
                     <span className="fw-bold">Market Cap: </span>
                     {companyInfo.marketCapitalization}
                  </div>
                  <div>
                     <span className="fw-bold">Shares Outstanding: </span>
                     {companyInfo.shareOutstanding}
                  </div>
                  <div>
                     <span className="fw-bold">url: </span>
                     <a href={companyInfo.weburl}>{companyInfo.weburl}</a>
                 
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default StockData;

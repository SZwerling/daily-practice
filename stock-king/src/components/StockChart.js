import Chart from "react-apexcharts";
import { useState, useEffect } from "react";

const StockChart = ({ chartData, symbol }) => {
   const { day, week, year } = chartData;
   const [dateFormat, setDateFormat] = useState(day);

   const color = dateFormat[dateFormat.length-1].y - dateFormat[0].y > 0 ? "#26C281" : "#ed3419"

   console.log(color)

   const options = {
      colors: [color],
      title: {
         text: symbol,
         align: "center",
         style: {
            fontSize: "24px",
         },
      },
      chart: {
         id: "stock data",
         animations: {
            speed: 1300,
         },
      },
      xaxis: {
         type: "datetime",
         labels: {
            datetimeUTC: false,
         },
      },
      tooltip: {
         x: {
            format: "MMM dd HH:MM",
         },
      },
   };

   const series = [
      {
         name: symbol,
         data: dateFormat,
      },
   ];

   const renderButtonSelect = (button) => {
    const classes = "btn m-1 "
    if(button === dateFormat){
        return classes + "btn-primary"
    } else {
        return classes + "btn-outline-primary"
    }
   }

   

   return (
      <div className="mt-5 p-4 shadow-sm bg-white">
         <Chart options={options} series={series} type="area" width="100%" />
         <div>
            <button className={renderButtonSelect(day)} onClick={() => setDateFormat(day)}>24hr</button>
            <button className={renderButtonSelect(week)} onClick={() => setDateFormat(week)}>7d</button>
            <button className={renderButtonSelect(year)} onClick={() => setDateFormat(year)}>1yr</button>
         </div>
      </div>
   );
};

export default StockChart;

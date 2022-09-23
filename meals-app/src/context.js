import React, { useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   const fetchedData = async () => {
      try {
         const response = await fetch("http://www.boredapi.com/api/activity/");
         const data = await response.json();
         console.log(data.activity);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchedData();
   }, []);

   return (
      <AppContext.Provider value={{ name: "John", occupation: "Student" }}>
         {children}
      </AppContext.Provider>
   );
};

const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

// https://www.boredapi.com/api/activity

// USING .THEN
// useEffect(() => {
//     fetch("http://www.boredapi.com/api/activity/").then((response) =>
//        response.json().then((data) => console.log(data.activity))
//     );
//  }, []);

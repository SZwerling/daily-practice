import React, { useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   useEffect(() => {
      fetch("http://www.boredapi.com/api/activity/").then((response) =>
         response.json().then((data) => console.log(data.activity))
      );
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

import React, { useContext, useEffect } from "react";

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {
   const fetchedData = async () => {
      try {
         const response = await fetch(allMealsUrl+'chicken');
         const data = await response.json();
         console.log(data.meals);
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

// MEAL BY NAME
// https://www.themealdb.com/api/json/v1/1/search.php?s=chicken

// RANDOM MEAL
// https://www.themealdb.com/api/json/v1/1/random.php





// https://www.boredapi.com/api/activity

// USING .THEN
// useEffect(() => {
//     fetch("http://www.boredapi.com/api/activity/").then((response) =>
//        response.json().then((data) => console.log(data.activity))
//     );
//  }, []);

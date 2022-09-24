import React, { useContext, useState,useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken";
const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {

   const [ meals, setMeals] = useState([])
   const [ loading, setLoading ] = useState(false)

   const fetchedMeals = async (url) => {
      setLoading(true)
      try {
         const { data } = await axios.get(url);
         setMeals(data.meals)
      } catch (error) {
         console.log(error.response);
      }
      setLoading(false)
   };

   useEffect(() => {
      fetchedMeals(allMealsUrl);
     
   }, []);

  

   return (
      <AppContext.Provider value={{ meals, loading }}>
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

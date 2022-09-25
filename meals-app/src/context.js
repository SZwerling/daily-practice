import React, { useContext, useState,useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {

   const [ meals, setMeals] = useState([])
   const [ loading, setLoading ] = useState(false)
   const [ searchTerm, setSearchTerm ] = useState('')


   const fetchRandomMeal = () => {
      fetchedMeals(randomMeal)
   }

   const fetchedMeals = async (url) => {
      setLoading(true)
      try {
         const { data } = await axios.get(url);
         if(data.meals){
            setMeals(data.meals)
         } else {
            setMeals([])
         }
         
      } catch (error) {
         console.log(error.response);
      }
      setLoading(false)
   };

   useEffect(() => {
      fetchedMeals(allMealsUrl+searchTerm.replace(/\s/g, "+"))
     
   }, [searchTerm]);



  

   return (
      <AppContext.Provider value={{ meals, loading, setSearchTerm, fetchRandomMeal }}>
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



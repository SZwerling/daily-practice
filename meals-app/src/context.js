import React, { useContext, useState,useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {

   const [ meals, setMeals] = useState([])
   const [ loading, setLoading ] = useState(false)
   const [ searchTerm, setSearchTerm ] = useState('')
   const [ showModal, setShowModal ] = useState(false)
   const [ selectedMeal, setSelectedMeal ] = useState(null)


   const selectMeal = (idMeal, favoriteMeal) => {
      let meal;
      
        meal = meals.find((meal) => meal.idMeal === idMeal);
      
      setSelectedMeal(meal);
      setShowModal(true)
    }




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

   // IF WE DON'T WANT A DEFAULT SEARCH TERM WE CAN DO THIS TO LOAD FIRST TIME WHEN NO SEARCH TERM
   // the api returns even when no search term
   useEffect(() => {
      fetchedMeals(allMealsUrl)
   }, [])


   // NO SEARCH TERM ON RANDOMMEAL, THIS UNINENTIONALLY UPDATES SEARCHTERM STATE RUNNING FETCHED MEALS FUNCTION
   // THIS SAYS IF NO SEARCH TERM // WHICH THERE ISN'T BECAUSE IT GETS WIPE ON HANDLERANDOM FUNCTION // THEN DON'T CALL FETCHEDMEALS WITH ALLMEALS
   useEffect(() => {
      if(!searchTerm){
         return
      }
      fetchedMeals(allMealsUrl+searchTerm.replace(/\s/g, "+"))  
   }, [searchTerm]);



  

   return (
      <AppContext.Provider value={{ meals, loading, setSearchTerm, fetchRandomMeal, showModal, setShowModal, selectedMeal, selectMeal }}>
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



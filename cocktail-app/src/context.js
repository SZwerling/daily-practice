import React, { useContext, useEffect } from 'react'
import axios from 'axios'

const AppContext = React.createContext()  // returns provider and consumer
const allDrinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const randomDrinkUrl ='https://www.thecocktaildb.com/api/json/v1/1/random.php'
const byIngredientUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka'



const AppProvider = ({ children }) => {

    const fetchDrinks = async (url) => {
        try {
            const { data } = await axios.get(url)
            console.log(data.drinks[0].strDrinkThumb)
        } catch (error) {
            console.log(error)
        }
    }

    //useEffect itself cannot be async
    useEffect(() => {
        fetchDrinks(randomDrinkUrl)
    }, [])

    return(
        <AppContext.Provider value={{hello: 23, fat: true}}> 
            {children}
        </AppContext.Provider> 
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }

// empty search 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
// search by ingredient 'www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka'
// random cocktail 'www.thecocktaildb.com/api/json/v1/1/random.php'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext()  // returns provider and consumer
const allDrinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const randomDrinkUrl ='https://www.thecocktaildb.com/api/json/v1/1/random.php'
const byIngredientUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka'



const AppProvider = ({ children }) => {

    const [ cocktails, setCocktails ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ searchTerm, setSearchTerm ] = useState('')

    const fetchDrinks = async (url) => {
        setLoading(true)
        try {
            const { data } = await axios.get(url)
            if(data.drinks){
                setCocktails(data.drinks)
            } else {
                setCocktails([])
            }
           
        } catch (error) {
            console.log(error.response)
        }
        setLoading(false)
    }

    const fetchRandomDrink = () => {
        fetchDrinks(randomDrinkUrl)
      }

    //useEffect itself cannot be async
    useEffect(() => {
        fetchDrinks(allDrinksUrl)
    }, [])

    useEffect(() => {
        if(!searchTerm) return;
        fetchDrinks(`${allDrinksUrl}${searchTerm}`)
    }, [searchTerm])

    return(
        <AppContext.Provider value={{ cocktails, loading, setSearchTerm, fetchRandomDrink }}> 
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
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext()  // returns provider and consumer
const allDrinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const randomDrinkUrl ='https://www.thecocktaildb.com/api/json/v1/1/random.php'




const AppProvider = ({ children }) => {

    const [ cocktails, setCocktails ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ searchTerm, setSearchTerm ] = useState('')
    const [ collection, setCollection ] = useState(JSON.parse(localStorage.getItem("collection")) || []);
    // const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

   
    const addToCollection = (idDrink) => {
        const drink = cocktails.find((drink) => drink.idDrink === idDrink);
        const alreadyFavorite = collection.find((drink) => drink.idDrink === idDrink);
        if (alreadyFavorite) return
        const updatedFavorites = [...collection, drink]
        localStorage.setItem('collection', JSON.stringify(updatedFavorites))
        setCollection(updatedFavorites)
      }
      const removeFromCollection = (idDrink) => {
        const updatedFavorites = collection.filter((drink) => drink.idDrink !== idDrink);
        localStorage.setItem('collection', JSON.stringify(updatedFavorites))
        setCollection(updatedFavorites)
      }

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
        <AppContext.Provider value={{ cocktails, loading, setSearchTerm, fetchRandomDrink, addToCollection, collection, removeFromCollection, fetchDrinks }}> 
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
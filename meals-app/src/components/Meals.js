import { useGlobalContext } from "../context";
import { FaThumbsUp } from "react-icons/fa"

const Meals = () => {
    const { meals, loading, selectMeal } = useGlobalContext()
   //while waiting for fetchedMeals to return a value
    if(loading){
        return(
            <section className="loading">
                <h4>Loading...</h4>
            </section>
           
        )
    }

    //if returned array is empty
    if(meals.length < 1){
        return(
            <section className="loading">
                <h4>Error In Search Term. Please Try Again.</h4>
            </section>
        )
    }

    //display returned array from fetchedMeals function
    return <section className="section-center">
    {meals.map((meal) => {
       
        const {idMeal, strMeal : title, strMealThumb: img } = meal; // colon is for renaming destructured property
        return(
            //change to figure
            <article key={idMeal} className="single-meal"> 
                <img src={img} className="img" onClick={() => selectMeal(idMeal)}/>
                <footer>
                    <h5>{title}</h5>
                    <button className="like-btn"><FaThumbsUp /></button>
                </footer>
            </article>
        )
    })}
    </section>
   
}

export default Meals;
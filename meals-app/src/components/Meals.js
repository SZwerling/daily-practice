import { useGlobalContext } from "../context";
import { FaThumbsUp } from "react-icons/fa"

const Meals = () => {
    const { meals } = useGlobalContext()
    console.log(meals)
  
    return <section className="section-center">
    {meals.map((meal) => {
        const {idMeal, strMeal : title, strMealThumb: img } = meal; // colon is for renaming destructured property
        return(
            //change to figure
            <article key={idMeal} className="single-meal"> 
                <img src={img} className="img" />
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
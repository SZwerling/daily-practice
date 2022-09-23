import { useGlobalContext } from "../context";


const Meals = () => {
    const { meals } = useGlobalContext()
  
    return <div>
    {meals.map((meal) => {
        return(
            <h1 key={meal.idMeal}>{meal.strMeal}</h1>
        )
    })}
    </div>
   
}

export default Meals;
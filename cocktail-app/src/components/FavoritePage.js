import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const FavoritePage = () => {
   const { drinkId } = useParams();

   const { cocktails: drinks } = useGlobalContext();

   const specialDrink = drinks.filter((drink) => drink.idDrink === drinkId)[0];
   

   const ingredients = [];
   for (let el in specialDrink) {
      if (el.includes("strIngredient") && specialDrink[el]) {
         ingredients.push(specialDrink[el]);
      }
   }

   const RenderIngredients = () => {
      return (
         <p className="ingredients">
            Ingredients:{" "}&nbsp;
            {ingredients.map((ingredient) => (
               <span className="ingredient-span" key={ingredient}>
                  {ingredient}
               </span>
            ))}{" "}
         </p>
      );
   };

   const {
      strDrink: title,
      strInstructions,
      strDrinkThumb: image,
   } = specialDrink;
   return (
      <div className="favorite-container">
         <div className="favorite-content">
            <h4>{title}</h4>
            <RenderIngredients />
            <p>Instructions: &nbsp; {strInstructions}</p>

            <Link to="/">
               <button className="btn">
                  back
               </button>
            </Link>
         </div>
         <img src={image} alt={title} className="img modal-img" />
      </div>
   );
};

export default FavoritePage;

// <Link to={`/directory/${campsite.id}`} >

//  <Route path='/directory/:campsiteId' component={campsiteWithId} />

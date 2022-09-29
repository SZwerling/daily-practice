import { useGlobalContext } from "../context";
import { Puff } from "react-loading-icons";

const Drinks = () => {
   const { cocktails: drinks, loading } = useGlobalContext();

   if (loading) {
      return (
         <section className="loading">
            <Puff stroke="#98ff98" />
            Loading...
         </section>
      );
   }

   if (drinks.length < 1) {
      return (
         <section className="section-drinks">
            <h4>No cocktails matched your search term. Please try again.</h4>
         </section>
      );
   }

   return (
    
      <section className="section-drinks">
         {drinks.map((drink) => {
            const {
               idDrink,
               strDrinkThumb: image,
               strDrink: title,
               strIngredient1,
            } = drink;
            return (
               <article key={idDrink} className="drink-card">
                  <figure>
                     <img className="drink-card-img" src={image} alt={title} />
                  </figure>
                  <figcaption>
                     <span className="span">{title}</span>
                     <span className="span">
                        Main Ingredient: {strIngredient1}
                     </span>
                  </figcaption>
                  <button className="card-btn">add to favorites</button>
               </article>
            );
         })}
      </section>
   );
};

export default Drinks;

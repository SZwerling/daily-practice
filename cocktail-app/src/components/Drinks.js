import { useGlobalContext } from "../context";
import { Puff } from "react-loading-icons";
import { Link } from 'react-router-dom'

const Drinks = () => {
   const { cocktails: drinks, loading, addToCollection } = useGlobalContext();

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
                    <Link to={`/special/${idDrink}`}>
                    <img className="drink-card-img" src={image} alt={title} />
                    </Link>
                    
                  </figure>
                  <figcaption>
                     <span className="span">{title}</span>
                     <span className="span">
                        Main Ingredient: {strIngredient1}
                     </span>
                  </figcaption>
                  <button onClick={() => addToCollection(idDrink)} className="card-btn">add to collection</button>
               </article>
             
            );
         })}
      </section>
   );
};

export default Drinks;

import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Collection = () => {
   const { collection, removeFromCollection } = useGlobalContext();

   return (
      <section className="collection">
         <div className="collection-content">
            <h5>collection</h5>
            <div className="collection-container">
               {collection.map((item) => {
                  const { idDrink, strDrinkThumb: image, strDrink } = item;

                  return (
                     <div key={idDrink} className="collection-item">
                        <Link to={`/special/${idDrink}`}>
                           <img
                              alt={strDrink}
                              src={image}
                              className="collection-img img"
                           />
                        </Link>

                        <button
                           classaName="remove-btn"
                           onClick={() => removeFromCollection(idDrink)}
                        >
                           remove
                        </button>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Collection;

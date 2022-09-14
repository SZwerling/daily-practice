import React from "react";
import home from "./items";

const items = home;

const CardList = items.map((item) => {
   return (
      <div key={item.prodId} className="card">
         <div className="imageAndBrand">
            <img
               className="img"
               src={item.imageUrl}
               alt={item.shortDescription}
            />
            <h3>{item.brand}</h3>
         </div>

         <div className="itemDescription">
            <h1>{item.name}</h1>

            <p>{item.description}</p>
            <p className="rating">
               rating: {item.rating} out of {item.ratingCount} reviews
            </p>
         </div>
         <div className="priceAndButton">
            <p className="price">{item.price}</p>

            <p>
               <button>Add to Cart</button>
            </p>
         </div>
      </div>
   );
});

function List() {
   return <ul>{CardList}</ul>;
}

export default List;

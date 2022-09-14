import React from 'react'
import home from "./items";


const firstItem = list[0]

function ShortOne() {
    return(
        <div key={firstItem.prodId} className="cardShort">
        <div className="imageAndBrand">
           <img
              className="img"
              src={firstItem.imageUrl}
              alt={firstItem.shortDescription}
           />
           <h3>{firstItem.brand}</h3>
        </div>

        <div className="itemDescription">
           <h1 className='nameShort'>{firstItem.name}</h1>

           <p>{firstItem.shortDescription}</p>
           <p className="rating">
              rating: {firstItem.rating} out of {firstItem.ratingCount} reviews
           </p>
        </div>
        <div className="priceAndButton">
           <p className="price">{firstItem.price}</p>
           <p>
              <button>Add to Cart</button>
           </p>
        </div>
     </div>
    )
}

export default ShortOne;
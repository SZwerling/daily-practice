import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
    const [text, setText] = useState('')
    console.log('rerender')
    function handleChange(term){
        setText(term)
    }
    

    function handleSubmit(e){
        console.log(text)
        e.preventDefault()
    }

   return (
      <header className="search-container">
         <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="search-input"></label>
            <input onChange={e => handleChange(e.target.value)}
               id="search-input"
               type="text"
               placeholder="type favorite meal"
               className="form-input"
            />
            <button type="submit" className="btn">
               search
            </button>
            <button type="button" className="btn btn-hipster">
               suprise me !
            </button>
         </form>
      </header>
   );
};

export default Search;

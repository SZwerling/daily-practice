import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
    const [text, setText] = useState('')
    const { setSearchTerm, fetchRandomMeal } = useGlobalContext();
    
    function handleChange(e){
        setText(e.target.value)
    }
    

    function handleSubmit(e){
        e.preventDefault()
        if(text){
         setSearchTerm(text)
        }
        setText('')   
    }

   return (
      <header className="search-container">
         <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="search-input"></label>
            <input onChange={handleChange}
               id="search-input"
               type="text"
               value={text} //for controlled input // means react state is in charge // one source of truth
               placeholder="type favorite meal"
               className="form-input"
            />
            <button type="submit" className="btn">
               search
            </button>
            <button type="button" className="btn btn-hipster" onClick={fetchRandomMeal}>
               suprise me !
            </button>
         </form>
      </header>
   );
};

export default Search;

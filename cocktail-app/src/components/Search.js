import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
   const [text, setText] = useState("");
   const { setSearchTerm, fetchRandomDrink } = useGlobalContext();
   const handleChange = (e) => {
      setText(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (text) {
         setSearchTerm(text);
      }
   };

   const handleRandom = () => {
    setSearchTerm('')
    setText('')
    fetchRandomDrink()
   }

   return (
      <header className="search-container">
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               plaeholder="search"
               className="form-input"
               onChange={handleChange}
               value={text}
            />
            <button>search</button>
            <button onClick={handleRandom}>random</button>
         </form>
      </header>
   );
};

export default Search;

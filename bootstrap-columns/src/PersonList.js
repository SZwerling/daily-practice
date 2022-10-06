import axios from "axios";
import { useEffect, useState } from "react";
import BASE from "./apis/PlaceHolderApi";

const PersonList = () => {
   const [names, setNames] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await BASE.get("users");
            const { data } = response;
            console.log(data);
            setNames(data);
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, []);

   return (
      <div className="container">
         <ul className="list-group">
            {names.map((name) => {
               return (
                  <li key={name.id} className="list-group-item">
                     {name.name}
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default PersonList;

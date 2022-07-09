import React from "react";

const Header = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
         <div className="container-fluid">
            <a className="navbar-brand ms-3" href="#">
               Logo
            </a>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNav"
               aria-controls="navbarNav"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <a className="nav-link" href="#">
                        Page 1
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">
                        Page 2
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">
                        Page 3
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Header;

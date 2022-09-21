import React from "react";

const Header = () => {
   return (
      <React.Fragment>
         <header className="container-fluid bg-primary border border-dark">Head info here?</header>
         <nav className="navbar navbar-expand-md bg-warning border-bottom border-dark">
            <div className="container-fluid">
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu"
                  aria-controls="menu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="menu">
                  <div className="navbar-nav me-auto mb-2 mb-lg-0">
                     <a
                        className="nav-link active" href="#"
                     >
                        Home
                     </a>

                     <a className="nav-link" href="#">
                        About
                     </a>

                     <a className="nav-link" href="#">
                        Products
                     </a>

                     <a className="nav-link" href="#">
                        Contact
                     </a>
                  </div>
               </div>
            </div>
         </nav>
      </React.Fragment>
   );
};

export default Header;

import { Link } from "react-router-dom";

const Footer = () => {
   let today = new Date();
   return (
      <footer className="bg-dark text-center text-white">
         <div className="container p-4 pb-0">
            <section className="mb-4">
               <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.facebook.com/"
                  role="button"
               >
                  <i className="col-2-md bi bi-facebook"></i>
               </a>
               <a
                  className="btn btn-outline-light btn-floating m-1"
                  to="#!"
                  role="button"
               >
                  <i className=" col-2-md bi bi-twitter"></i>
               </a>
               <a
                  className="btn btn-outline-light btn-floating m-1"
                  to="#!"
                  role="button"
               >
                  <i className="bi bi-google"></i>
               </a>
            </section>
         </div>

         <div
            className="text-center p-3"
       
         >
            © 2020 Copyright: 
            <a className="text-white mx-1 " href="https://portfolio-site-livid-sigma.vercel.app/">
               Slim Zwerling
            </a>
         </div>
      </footer>
   );
};

export default Footer;

// <i className="col-2-md bi bi-facebook"></i>
// <i class=" col-2-md bi bi-twitter"></i>
// <i class="col-2-md bi bi-youtube"></i>

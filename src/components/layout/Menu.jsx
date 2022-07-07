import {FaBookmark, FaHeart, FaInfo, FaPowerOff, FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom";

function Menu() {
    return (
       <div className="w-100 text-start align-content-center mt-4 my-menu">
           <div className="w-100  border-bottom border-2 border-light m-2 ">
               <h5 className="border-2 fw-bold">
                   <a href="/mensen" className="remove">
                       <FaSearch className="m-2"/>

                       Mensen
                   </a>
               </h5>
           </div>

           <div className="w-100  border-bottom border-2 border-light m-2">
               <h5 className="border-2 fw-bold">
                   <a href="/mensen" className="remove">
                       <FaHeart className="m-2"/>

                       Lieblingsmensa
                   </a>
               </h5>
           </div>

           <div className="w-100  border-bottom border-2 border-light m-2">
               <h5 className="border-2 fw-bold">
                   <a href="/mensen" className="remove">
                       <FaBookmark className="m-2"/>

                       Gespeicherte Speisen
                   </a>
               </h5>
           </div>

           <div className="w-100  border-bottom border-2 border-light m-2">
               <h5 className="border-2 fw-bold">
                   <a href="/mensen" className="remove">
                       <FaInfo className="m-2"/>

                       Profil
                   </a>
               </h5>
           </div>

           <div className="w-100  border-bottom border-2 border-light m-2">
               <h5 className="border-2 fw-bold">
                   <a href="/mensen" className="remove text-danger">
                       <FaPowerOff className="m-2"/>

                       Ausloggen
                   </a>
               </h5>
           </div>
    </div>
    )
}

export default Menu

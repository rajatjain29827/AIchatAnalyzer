import { Route, Router, Routes, Link } from "react-router-dom";
import { useContext } from "react";

function NavBar(){

    return(
    <>
    <nav className="fixed flex ml-auto right-1/100 ">
       
        <Link to="/register" className=" border-2 p-3 rounded-2xl bg-mist-700 text-amber-50 hover:bg-gray-950" >Register </Link>
        
        <Link to="/login" className="  border-2  p-3 rounded-2xl bg-mist-700 text-amber-50 hover:bg-gray-950" >Login</Link>
           
    </nav>
    </>
)

}
export default NavBar;

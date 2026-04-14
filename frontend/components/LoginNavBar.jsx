import React from "react";
import { Route, Router, Routes, Link } from "react-router-dom";
function LoginNavBar(){
    return(
        <>
        <nav>
            <Link to ="/trustedContacts">Trusted Contacts</Link>
        </nav>
        </>
    )
}

export default LoginNavBar
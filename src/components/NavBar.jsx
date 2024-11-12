import React from "react";
import { Link } from "react-router-dom";
    const links=[{
        name: "LoginPage",
        href: "/Login",
         
    },
    {
        name: "Register",
        href: "/Register",

    },
]
   const NavBar = () => {
   return( 
   
   <div>
    {links.map((x) => (
    
    <Link to={x.href}>{x.name}</Link>

    ))}
   </div>
   );
};

   export default NavBar;



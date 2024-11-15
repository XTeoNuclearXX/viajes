import React, { useEffect, useState } from "react";
import Header from "./header";
import "./OtrasAventuras.css"

export const UsuariosPage= () =>{
 const[locations, setLocations ] = useState([])
useEffect(()=>{
fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users')
.then(response => response.json())
.then(results=> setLocations(results))

},[]) 
   return (
    <>
    <Header/>
       <table>
         <thead>
            <tr>
                <th><center>Usuario</center></th>
                <th><center>Email</center></th>
            </tr>    
         </thead>
         <tbody>
            {locations && locations.map(location => {
            return <tr>
                <td>{location.name}</td>
                <td>{location.email}</td>

            </tr>
                
            }
            )}

         </tbody>
       </table>
     </>
   );
 };
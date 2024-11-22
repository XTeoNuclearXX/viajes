import React, { useEffect, useState } from "react";
import Header from "./header";
import "./OtrasAventuras.css"

export const OtrasAventuras= () =>{
 const[locations, setLocations ] = useState([])
useEffect(()=>{
fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs')
.then(response => response.json())
.then(results=> setLocations(results))

},[]) 
   return (
    <>
    <Header/>
       <table>
         <thead>
            <tr>
                <th>Nombre</th>
                <th>Ubicacion</th>
                <th><center>Reseña</center></th>
                <th>Ranking</th>
                <th>Url Imagen</th>
            </tr>    
         </thead>
         <tbody>
            {locations && locations.map(location => {
            return <tr>
                <td>{location.nombre}</td>
                <td>{location.ubicacion}</td>
                <td>{location.resena}</td>
                <td>{location.rating}</td>
                <td><img src={location.foto}/></td>


            </tr>
                
            }
            )}

         </tbody>
       </table>
     </>
   );
 };

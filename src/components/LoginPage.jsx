import React , {useState}from "react";
import './LoginPage.css';
import { useNavigate } from "react-router-dom";

export const LoginPage = () =>{
  const navigate = useNavigate( )
  const [error, setError] = useState(false)
  const submit = async (event) =>{
    event.preventDefault()
    const correo = event.target.elements.correo.value
    const pass = event.target.elements.password.value

    const response =  await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users')
    const users = await response.json()
    
    console.log(users);

    const user = users.find(user => user.email=== correo && user.password===pass);

    if (user){
      navigate('/landing')

    }else{

      setError(true)

    }


  }

  const handleRegister = (event) => {
    event.preventDefault();
    navigate("/Register");
  };
   return (
     <form onSubmit={submit}className="login-form">
       <h2>Inicio de sesión</h2>
       {error ? 'Las credenciales son incorrectas :(':null}
       <label htmlFor="username">Correo</label>
       <input type="email" name="correo" id="username" placeholder="Ingresa tu correo" />
       
       <label htmlFor="password">Contraseña</label>
       <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" />
       
       <button type="submit">Iniciar sesión</button>
       <button type="button" onClick={handleRegister}>Registrarse</button>
     </form>
   );
 };

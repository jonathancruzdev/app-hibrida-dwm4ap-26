import React from 'react'
import { useState } from 'react'


/*     const array = [ 'juan', true, () =>{ alert('hola')}];
    const [ nombre, valor, fn  ] = array; */
const Login = () => {

    const [ user, setUser] = useState({email: '', password: ''});
    const endPoint = 'http://127.0.0.1:3000/api/users/auth';
    const loginSubmit = (e) => {
        e.preventDefault();
        console.log('Envio de formulario');
        // Agregar el fetch a la API
        fetch(endPoint, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error" ,error))
        .then((response) => console.log("Exito", response));
    }
    

    const handlerForm = (event) => {
        const { name, value} = event.target;
        console.log(name, value);
        setUser( {...user, [name]: value} );
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={ loginSubmit }>
          

            <label htmlFor="email">Email</label>
            <input 
                value={ user.email}
                onChange={ handlerForm} 
                id="email" 
                name="email" 
                type="email" 
            />

            <label htmlFor="password">Contraseña</label>
            <input 
                value={ user.password}
                onChange={ handlerForm} 

                type="password" 
                id="password" 
                name='password' 
            />

            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login
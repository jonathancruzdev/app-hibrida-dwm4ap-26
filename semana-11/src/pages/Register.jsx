import React from 'react'
import { useState } from 'react'

/*     const array = [ 'juan', true, () =>{ alert('hola')}];
    const [ nombre, valor, fn  ] = array; */
const Register = () => {

    const [ user, setUser] = useState({ name:'', email: '', password: ''});
    const endPoint = 'http://127.0.0.1:3000/api/users';
    const submit = (e) => {
        e.preventDefault();
        console.log('Envio de formulario');
        // Agregar el fetch a la API
    }

    const handlerForm = (event) => {
        const { name, value} = event.target;
        console.log(name, value);
        setUser( {...user, [name]: value} );
    }

  return (
    <div>
        <h1>Registro</h1>
        <form onSubmit={ submit }>
            <label htmlFor="name">Nombre</label>
            <input 
                value={user.name}
                onChange={ handlerForm} 
                id="name" 
                name="name" 
                type="text"  
            />

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

            <button type='submit'>Registrarme</button>
        </form>
    </div>
  )
}

export default Register
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const Login = () => {

    const [ user, setUser] = useState({ email: '', password: ''});
    const navigate = useNavigate();

    const handlerForm = async ( event)=>{
        event.preventDefault()
        const body = {
            name: user.name,
            email: user.email,
            password: user.password
        }
        const endPoint = 'http://127.0.0.1:3000/api/auth/login'
        try {
            const res = await fetch(endPoint,  {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const json = await res.json();
            const {token } = json

            console.log( token);
            console.log( jwtDecode(token));

            // navigate('/login');
        } catch (error) {
            console.error( error)
        }

    }


    const handleChange = ( event) => {
        setUser( { ...user, [ event.target.name]: event.target.value})
    }
  return (
    <main className='container'>
        <div className="row mt-4">
            <div className="col-md-2"></div>
            <div className="col-md-10">
                <form onSubmit={ handlerForm} className='card p-2'>

                    <label htmlFor="">Email</label>
                    <input onChange={ handleChange} value={user.email}  type="email" name='email' className='form-control mb-2' />

                    <label htmlFor="">Contraseña</label>
                    <input onChange={ handleChange} value={user.password}  type="password" name='password' className='form-control mb-2' />

                    <button className='btn btn-success' type='submit'>Ingresar</button>
                </form>
            </div>
            <div className="col"></div>
        </div>

    </main>
  )
}

export default Login
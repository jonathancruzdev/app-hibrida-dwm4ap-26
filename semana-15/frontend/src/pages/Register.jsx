import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [ user, setUser] = useState({ name:'', email: '', password: ''});
    const navigate = useNavigate();

    const handlerForm = async ()=>{
        const body = {
            name: user.name,
            email: user.email,
            password: user.password
        }
        const endPoint = 'http://127.0.0.1:3000/api/auth/register'
        try {
            const res = await fetch(endPoint,  {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const json = await res.json();
            console.log( json);

            navigate('/login');
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
                    <label htmlFor="">Nombre</label>
                    <input onChange={ handleChange} value={user.name} type="text" name='name' className='form-control mb-2' />

                    <label htmlFor="">Email</label>
                    <input onChange={ handleChange} value={user.email}  type="email" name='email' className='form-control mb-2' />

                    <label htmlFor="">Contraseña</label>
                    <input onChange={ handleChange} value={user.password}  type="password" name='password' className='form-control mb-2' />

                    <button className='btn btn-success' type='submit'>Registrarme</button>
                </form>
            </div>
            <div className="col"></div>
        </div>

    </main>
  )
}

export default Register
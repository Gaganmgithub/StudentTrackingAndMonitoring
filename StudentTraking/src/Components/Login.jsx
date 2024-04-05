import React, { useCallback, useState } from 'react'
import './Style.css'
import axios from 'axios'

const Login = () => {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('https://localhost:3000/auth/adminlogin')
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-30 border loginForm'>
            <h2 className='Heading'>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'> <strong>Email:</strong></label>
                    <input type='email' name='email' autoComplete='off' placeholder='enter email' 
                      onChange={() => setValues({...values, email : e.target.value})} className='form-control rounded-0'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'> <strong>Passwrod:</strong></label>
                    <input type='password' name='password' placeholder='enter password' 
                    onChange={() => setValues({...values, password : e.target.value})} className='form-control rounded-0'></input>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Log In</button>
                <div className='mb-1'>
                    <input type='checkbox' name='tick' id='tick' className='me-2'></input>
                    <label htmlFor='password'> You are agree to our Terms and Condition</label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
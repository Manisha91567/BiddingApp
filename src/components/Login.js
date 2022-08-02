import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Login () {
    return (
        <>
            <h2>LOGIN</h2>
            <form action="/home">
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="first_name" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/signup">Create an account</Link>.</p>
            </footer>
        </>
    )
}

export default Login;
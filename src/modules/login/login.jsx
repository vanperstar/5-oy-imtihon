import { useContext, useRef } from 'react'
import boburLogoHeader from '../../assets/img/bobur-logo-header.png'
import { LoginContext } from '../../context/login-contex'
import './login.scss'

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    
    const {setToken} = useContext(LoginContext)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value


        if(email.trim() && password.trim()) {
            const res = await fetch(" https://n36-blog.herokuapp.com/login?login=Nurulloh&password=nur2004ub14", {
                // const res = await fetch(" https://reqres.in/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            })

            if(res.ok) {
                const data = await res.json()
                localStorage.getItem('token', JSON.stringify(data.token))
                setToken(data.token)
            }

        }
    }

    return(
        <>
        <div className='login container'>
            <a href="#">
                <img src={boburLogoHeader} alt="" />
            </a>
            <form className='login-form' action='#' method='POST' onSubmit={handleFormSubmit}>
                <h2>Login</h2>
                <input ref={emailRef} type="email" name="email" placeholder='Login' />
                <input ref={passwordRef} type="password" name="password" placeholder='Password' />
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}

export default Login
import { useRef } from 'react'
import boburLogoHeader from '../../assets/img/bobur-logo-header.png'
import { fetchToken } from './login-slice'
import { useSelector, useDispatch } from 'react-redux'
import './login.scss'
import { getUsers } from '../../store/reducer/user.slice'

const Login = () => {

    const dispetch = useDispatch()
    const emailRef = useRef()
    const passwordRef = useRef()
    
    useSelector((state ) => {
        state.token.token && localStorage.setItem("token", JSON.stringify(state.token.token))
    }) 

    const handleFormSubmit = async (e) => {
        e.preventDefault()  
        dispetch(fetchToken({
        login: emailRef.current.value,
        password: passwordRef.current.value,        
    }))
    dispetch(getUsers())
    e.target.reset()
    }
    
    return(
        <>
        <div className='container'>
            <div className='login'>
                <a href="#">
                    <img src={boburLogoHeader} alt="" />
                </a>
                <form className='login-form' onSubmit={handleFormSubmit}>
                    <h2>Login</h2>
                    <input defaultValue={'Nurulloh'} ref={emailRef} type="text" name="email" placeholder='Login' />
                    <input defaultValue={'nur2004ub14'} ref={passwordRef} type="password" name="password" placeholder='Password' />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login
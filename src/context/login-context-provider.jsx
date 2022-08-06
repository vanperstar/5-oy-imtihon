import { useState } from "react"
import { LoginContext } from "./login-contex";

export const LoginContextProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem('token') || null)

    return <LoginContext.Provider value={{token, setToken}}>
        {children}
    </LoginContext.Provider>
}
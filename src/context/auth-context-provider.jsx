import { useState } from "react"
import { AuthContext } from "./auth-contex";

export const AuthContextProvider = ({children}) => {
    const local = JSON.parse(localStorage.getItem('token'))

    const [token, setToken] = useState(localStorage.getItem('token') || null)

    const [auth, setAuth] = useState(local || ''); // Auth prive || public
    // const [token, setToken] = useState(local || ''); // Token localga saqlash uchun 
    const [million, setMillion ] = useState([]); // ummumiy data malumotlar
    const [filter, setFilter] = useState([]); // filterlangan data malumotlari
    const [Id, setId] = useState(0); // Id olish
    const [inner, setInner] = useState([]); // tanlangan Idni olish uchun
    const [searchBody, setSearchBody] = useState(''); // search value

    const data = {
        auth, 
        setAuth,
        token,
        setToken,
        filter,
        setFilter,
        million,
        setMillion,
        Id,
        setId,
        inner,
        setInner,
        searchBody,
        setSearchBody
    }

    return <AuthContext.Provider value={{token, setToken}}>
        {children}
    </AuthContext.Provider>
}
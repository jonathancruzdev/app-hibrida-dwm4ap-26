import { Children, createContext, useState }  from 'react'
import { jwtDecode } from 'jwt-decode';
const AuthContext = createContext();

const AuthProvider = ( { children }) => {
    const [ token, setToken] = useState('');
    const [ user, setUser] = useState( jwtDecode(token));

    const login = (jwt) => {
        setToken(jwt);
        setUser( jwtDecode(jwt));
    }

    const logout = (jwt) => {
        setToken(null);
        setUser( null);
    }


    return (
        <AuthContext.Provider value={ {token, user, login, logout} } >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider
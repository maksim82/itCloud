import { useState, createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        id: null,
        token: null
    });

    const sign = async (newForm, cb, typeSend) => {
        console.log(newForm)
        const res = await fetch(`http://localhost:8080/${typeSend}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newForm)
        });

        const data = await res.json();

        localStorage.setItem('token', JSON.stringify(data.body.jwt));

        setUser(() => ( {id: data.body.id, token: data.body.jwt} ));
        cb();
    };

    const logout = (cb) => {
        setUser(() => ( {id: null, token: null} ));
        localStorage.removeItem('token');
        cb();
    };

    const value = {user, sign, logout};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
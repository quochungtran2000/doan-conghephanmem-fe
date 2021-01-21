import React, { useState } from 'react'
import jwt from 'jsonwebtoken'

const UserContext = React.createContext()

const UserProvider = (props) => {

    const initial = {
        isLoggined: false, 
        isAdmin: false,
        username: ""
    }

    const [ user, setUser ] = useState(initial)

    const updateUser = (token) => {
        const { username, isAdmin } = jwt.decode(token);
        console.log(username, isAdmin)
        setUser({
            isLoggined: true,
            isAdmin: Boolean(isAdmin),
            username
        })
    }

    const logout = () => {
        setUser(initial)
    }

    return (
        // eslint-disable-next-line
        <UserContext.Provider value={{user, updateUser, logout}}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}
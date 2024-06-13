import React, { createContext, useContext, useState, useEffect } from 'react'
import { fetchActualUser, createNewUser, logIn, signOutUser, getUserFromLocalStorage } from './userApi.js'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loadUser = async () => {
            const currentUser = getUserFromLocalStorage()
            if (currentUser) {
                setUser(currentUser)
            } else {
                const fetchedUser = await fetchActualUser()
                setUser(fetchedUser)
            }
        }
        loadUser()
    }, [])

    const handleSignUp = async (email, password, userName) => {
        const newUser = await createNewUser(email, password, userName)
        setUser(newUser)
    }

    const handleLogIn = async (email, password) => {
        const loggedInUser = await logIn(email, password)
        setUser(loggedInUser)
    }

    const handleSignOut = async () => {
        await signOutUser()
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, handleSignUp, handleLogIn, handleSignOut }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)

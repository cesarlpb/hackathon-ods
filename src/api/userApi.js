import { supabase } from '../api/supabase'

// Función para guardar el usuario en localStorage
const saveUserToLocalStorage = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user))
}

// Función para obtener el usuario desde localStorage
export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('currentUser')
    return user ? JSON.parse(user) : null
}

// Fetch actual user from Supabase and save to localStorage
export const fetchActualUser = async () => {
    const { data } = await supabase.auth.getSession()
    const user = data?.session?.user || null
    if (user) {
        saveUserToLocalStorage(user)
    }
    return user

}

// Sign up new user and save to localStorage
export const createNewUser = async (email, password, user_name) => {
    const { data: { user }, error } = await supabase.auth.signUp(
        {
            email,
            password,
            options: {
                data: {
                    user_name
                }
            }
        }
    )

    if (error) {
        throw new Error(error.message)
    }

    saveUserToLocalStorage(user)
    return user
}

// Log in user and save to localStorage
export const logIn = async (email, password) => {
    const {
        data: { user },
        error
    } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
        throw new Error(error.message)
    }

    saveUserToLocalStorage(user)
    return user
}

// Sign out user and remove from localStorage
export const signOutUser = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
        throw new Error(error.message)
    }

    localStorage.removeItem('currentUser')
}
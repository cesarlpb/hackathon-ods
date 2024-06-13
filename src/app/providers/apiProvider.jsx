import { createContext, useContext } from 'react'
import { useCategoriasApi } from './categoriasApi'
import { useCursosApi } from './cursosApi'

const ApiContext = createContext()

export const ApiProvider = ({ children }) => {
    const categoriasApi = useCategoriasApi()
    const cursosApi = useCursosApi()

    return (
        <ApiContext.Provider value={{ categoriasApi, cursosApi }}>
            {children}
        </ApiContext.Provider>
    )
}

export const useApi = () => useContext(ApiContext)

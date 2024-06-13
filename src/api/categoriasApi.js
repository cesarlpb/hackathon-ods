import { supabase } from './supabase'

let categorias = []

export const useCategoriasApi = () => {
    const obtenerCategorias = async () => {
        if (categorias.length === 0) {
            const { data, error } = await supabase.from('categorias').select('*')
            if (error) {
                throw new Error(error.message)
            }
            categorias = data
        }
        return categorias
    }

    return {
        obtenerCategorias
    }
}

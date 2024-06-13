import { supabase } from './supabase'

let cursos = []


export const obtenerCursos = async () => {
    const { data, error } = await supabase.from('cursos').select('*')
    if (error) {
        throw new Error(error.message)
    }
    cursos = data;
    return data;
}

export   const crearCurso = async (nombre, descripcion, categoriaId, usuarioId) => {
    const { data, error } = await supabase.from('cursos').insert([
        { nombre, descripcion, categoria_id: categoriaId, usuario_id: usuarioId }
    ])
    if (error) {
        throw new Error(error.message)
    }
    cursos.push(data[0])
    return data
}

export   const eliminarCurso = async (cursoId) => {
        const { data, error } = await supabase.from('cursos').delete().match({ id: cursoId })
        if (error) {
            throw new Error(error.message)
        }
        cursos = cursos.filter(curso => curso.id !== cursoId)
        return data
}

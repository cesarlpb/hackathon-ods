import { useEffect, useState } from "react";
import { obtenerCursos } from "../api/cursosApi.js";

import Curso from "./Curso.jsx";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);


  useEffect(() => {
    obtenerCursos().then((data) => {setCursos(data)});
  }, []);
  return (
    <>
      <h1 className="text-4xl mt-3 p-3 font-bold text-center">
        Todos los cursos
      </h1>
      <div className="flex gap-5 flex-wrap items-center justify-center text-center mt-10 w-[80%] m-auto">
        {cursos.map(curso => 
          <Curso key={curso.id} curso={curso}/>
        )}
      </div>
    </>
  );
};

export default Cursos;

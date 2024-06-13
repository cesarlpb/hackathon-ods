import PopUp from './PopUp.jsx';
import { useState } from 'react';


const Curso = ({ curso }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <section key={curso.id} className="border w-[200px] h-[200px] p-5 shadow-lg hover:border-2 flex flex-col justify-between">
        <div>
          <h3>{curso.nombre}</h3>

          <p>{curso.profesor}</p>
          <p>{curso.fecha}</p>
        </div>
        <div>
          <button className="text-[#017C9B]" onClick={() => setActive(!active)}>Ver +</button>
        </div>
      </section>
      {active && <PopUp setActive={setActive} active={active} curso={curso} />}
    </>
  )
}

export default Curso
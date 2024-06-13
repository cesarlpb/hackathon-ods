/* eslint-disable react/prop-types */

const PopUp = ({curso, setActive, active}) => {

  console.log(curso)
  return (
    <div className="absolute z-10 border w-[800px] h-[600px] p-5 shadow-lg hover:border-2 flex flex-col justify-around bg-white">
      <button onClick={() => setActive(!active)} className="absolute top-2 right-5">X</button>
      <h1 className="text-2xl font-bold">{curso.nombre}</h1>
      <p>{curso.descripcion}</p>
      <p>Pablo Monteserin</p>
      <a className="text-sky-400" href={curso.course_link}>Entrar a sala</a> 
    </div>
  )
}

export default PopUp
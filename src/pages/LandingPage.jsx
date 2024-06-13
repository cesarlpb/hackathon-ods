import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <>
    <div className="bg-[url('./app/images/BackgroundImage.jpg')] w-[100vw] h-[100vh] bg-cover fixed">
    <div className="h-[100vh] flex flex-col justify-center items-center text-white bg-slate-900/75">
        <h1 className="font-bold text-7xl">Bienvenido a EduLink!</h1>
        <h2 className="font-semibold text-5xl">Tu educación, a tu alcance.</h2>
        <button className="hover:cursor-pointer font-medium text-xl mt-9 rounded-3xl border-2 border-white p-2 list-none"><Link to="/home">Ver cursos</Link></button>
    </div>
    </div>
    </>
  )
}

export default LandingPage
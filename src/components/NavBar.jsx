import { Link, useNavigate } from "react-router-dom"
import { useUserContext } from "../app/UserProvider"
import { useEffect } from "react";
import { signOutUser } from "../api/userApi";

const NavBar = () => {

  const [user, setUser] = useUserContext();

  const redirect = useNavigate();


  useEffect(() => {
    console.log('user')
    console.log(user)
  }, [user])

  const handleSignOut = async () => {
    const a = await signOutUser();
    setUser({})
    console.log(a);
    redirect('/');

  }

  return (
    <nav className="top-0 bg-[#017C9B] h-10 w-[100%] flex justify-between px-3 items-center">

      <h1 className="text-white font-semibold text-lg cursor-pointer" onClick={() => redirect('/')}>EduLink</h1>
      <ul>
        {user.role && <li className="text-white inline pr-3"><Link to="/myCourses">Mis cursos</Link></li>}
        {
          user.role ?
            <li onClick={handleSignOut}
              className="text-white inline"><Link to="/home">Sign out</Link></li>
            :

            <li className="text-white inline"><Link to="/Login">Iniciar sesión</Link></li>
        }

        {/* <li className="text-white inline"><Link to="/Register">Registrarse</Link></li> */}
      </ul>
    </nav>
  )
}

export default NavBar
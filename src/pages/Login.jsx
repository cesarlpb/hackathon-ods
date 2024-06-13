import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { logIn } from '../api/userApi'
import { useUserContext } from "../app/UserProvider";

const Login = () => {
    const [inputs, setInputs] = useState({})
    const [user, setUser] = useUserContext();
    // eslint-disable-next-line no-unused-vars
    const redirect = useNavigate();
    // funciones
    const handleInputs = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // fetch para enviar datos
        const response = await logIn(inputs.email, inputs.password);
        setUser(response);



        // limpiar inputs
        setInputs({ email: "", password: "" });

        if (response) {
            redirect('/home')
        }

    };


    useEffect(() => {
        console.log('user')
        console.log(user)
    }, [user])

    return (
        <>

            <div className=" p-4 md:p-0 md:flex md:flex-row md:justify-between w-full md:h-screen mx-auto rounded-lg bg-gradient-to-r from-[#7aa1ac] to-[#017c9b]">
                <div className="flex flex-col p-2 md:mt-16 w-full text-black">
                    <div
                    >
                        <div >
                            <h1 className="md:text-5xl font-semibold text-3xl w-fit mx-auto text-white mb-24">Iniciar sesión</h1>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col w-3/4 mx-auto md:gap-8 md:px-8 "
                            >
                                <div className="flex flex-col justify-between  md:flex-row gap-2 mt-4">
                                    <label className="flex items-center">Email</label>
                                    <input
                                        className="flex items-center shadow-sm md:w-3/4  shadow-neutral-300 p-2 border border-neutral-400 rounded-full "
                                        type="email"
                                        name="email"
                                        value={inputs.email}
                                        onChange={handleInputs}
                                    ></input>
                                </div>
                                <div className="flex flex-col justify-between  md:flex-row gap-2 mt-4">
                                    <label className="flex items-center">Password</label>
                                    <input
                                        className="flex items-center shadow-sm md:w-3/4  shadow-neutral-300 p-2 border border-neutral-400 rounded-full "
                                        type="password"
                                        name="password"
                                        value={inputs.password}
                                        onChange={handleInputs}
                                    ></input>

                                </div>

                                <button className="mt-8 mb-4 mx-auto w-full md:w-1/3 rounded-full shadow-sm border border-neutral-400 shadow-neutral-300 p-2 focus:shadow-inner hover:bg-white hover:text-[#017C9B]">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>

                <img
                    className="size-full w-5/12"
                    src="/public/login-image.avif"
                >

                </img>

            </div>


        </>
    );
}

export default Login;
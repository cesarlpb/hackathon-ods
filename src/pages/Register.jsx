import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../api/userApi";

const Login = () => {
    const [inputs, setInputs] = useState({})

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
        console.log('hello')
        console.log(inputs)

        const response = await createNewUser(inputs.email, inputs.password, inputs.name);
        console.log(response)



        // limpiar inputs
        setInputs({ user_name: "", email: "", password: "" });
    };


    return (
        <>

            <div className=" p-4 md:p-0 md:flex md:flex-row md:justify-between w-full md:h-screen mx-auto rounded-lg bg-gradient-to-r from-[#7a8fac] to-[#01639b] ">
                <div className="flex flex-col  p-2 md:mt-16 w-1/2 text-black">
                    <div
                    >
                        <div >
                            <h1 className="md:text-5xl font-semibold text-3xl w-fit mx-auto text-white mb-16">Regístrate</h1>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col w-full mx-auto md:gap-8 md:px-8"
                            >
                                <div className="flex flex-col justify-between  md:flex-row gap-4 mt-4">
                                    <label className="flex items-center">Name</label>
                                    <input
                                        className="flex items-center shadow-sm md:w-3/4  shadow-neutral-300 p-2 border border-neutral-400 rounded-full "
                                        type="text"
                                        name="user_name"
                                        value={inputs.name}
                                        onChange={handleInputs}
                                    ></input>
                                </div>
                                <div className="flex flex-col justify-between  md:flex-row gap-4 mt-4">
                                    <label className="flex items-center">Email</label>
                                    <input
                                        className="flex items-center shadow-sm md:w-3/4  shadow-neutral-300 p-2 border border-neutral-400 rounded-full focus:border-pink-500 focus:outline-none"
                                        type="email"
                                        name="email"
                                        value={inputs.email}
                                        onChange={handleInputs}
                                    ></input>
                                </div>
                                <div className="flex flex-col justify-between  md:flex-row gap-4 mt-4">
                                    <label className="flex items-center">Password</label>
                                    <input
                                        className="flex items-center shadow-sm md:w-3/4  shadow-neutral-300 p-2 border border-neutral-400 rounded-full focus:border-pink-500 focus:outline-none"
                                        type="password"
                                        name="password"
                                        value={inputs.password}
                                        onChange={handleInputs}
                                    ></input>

                                </div>

                                <button className="mt-8 mb-4 mx-auto w-full md:w-1/3 rounded-full shadow-sm border border-neutral-400 shadow-neutral-300 p-2 focus:shadow-inner focus:shadow-pink-500 focus:border-pink-500 focus:outline-none hover:bg-white hover:text-[#017C9B]">Enviar</button>
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
import React from 'react';

const Login = () => {
    return (
        <div>
            <header>
                <p>Login</p>
            </header>
            <main>
                <form>
                    <input id="username" type="text" placeholder="Your username or email"></input>
                    <input id="password" type="password" placeholder="Your password"></input>
                    <input type="submit"></input>
                </form>
            </main>
        </div>
    )
}

export default Login;
import React from 'react';

const Login = () => {
    return (
        <div id="login-container">
            <header>
                <h1>Login</h1>
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
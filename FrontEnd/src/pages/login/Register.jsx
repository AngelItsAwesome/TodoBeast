function Register(){
    return(
        <>
            <header className="login__header">
                <h1>Register</h1>
            </header>
            <form method={"POST"} action={"http://localhost:3000/auth/register"} className="login__form">
                <div className="login__camp">
                    <label htmlFor="email">Username</label>
                    <input name={"username"} type="text" id="username" placeholder="Enter your username..."/>
                </div>
                <div className="login__camp">
                    <label htmlFor="email">Email</label>
                    <input name={"email"} type="email" id="email" placeholder="Enter your email..."/>
                </div>
                <div className="login__camp">
                    <label htmlFor={"password"}>Password</label>
                    <input name={"password"} type="password" id="password" placeholder="Enter your password..."/>
                </div>
                <div className="login__camp">
                    <label htmlFor={"password"}>Celphone</label>
                    <input name={"celphone"} type="number" id="password" placeholder="Enter your celphone..."/>
                </div>
                <button type={"submit"} className={"login__button"}>Register</button>
            </form>
            <div className="login__options">
                <a href={'/'}>¿Already have an account?</a>
                <a href={'/register'}>¿Dont have an account?</a>
            </div>
        </>
    )
}

export default Register;
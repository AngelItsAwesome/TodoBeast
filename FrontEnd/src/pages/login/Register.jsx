import {useState, useEffect} from 'react'

function Register(){
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        celphone: '',
    });
    const [errors, setErrors] = useState([]);
    const changeValues = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormValues((prevValues) => ({...prevValues, [name]: value}
        ));
    }
    useEffect(() => {
        if(errors.length > 0){
            console.log("Hello!");
        }
    },[errors.length]);
    const register = async function(e){
        e.preventDefault();
        const data = new FormData();
        data.append('username', formValues.username);
        data.append('email', formValues.email);
        data.append('password', formValues.password);
        data.append('celphone', formValues.celphone);
        try{
            const res = await fetch('http://localhost:3000/auth/register',{
                method: 'POST',
                body: data,
                credentials: 'include',
            });
            if(res.ok){
                window.location.href= "/check";
            }
            const err = await res.json();
            setErrors(() => [...err]);
            console.log(errors);
        }catch(error){
            console.log(error);
        }
    }
    return(
        <>
            <header className="login__header">
                <h1>Register</h1>
            </header>
            <form onInput={changeValues} className="login__form">
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
                    <input name={"celphone"} type="number" id="celphone" placeholder="Enter your celphone..."/>
                </div>
                <div className={"login__errors"}>
                    {errors.map(error => {
                        return `<div>${error}</div>`
                    })}
                </div>
                <button onClick={register} type={"submit"} className={"login__button"}>Register</button>
            </form>
            <div className="login__options">
                <a href={'/'}>¿Already have an account?</a>
                <a href={'/register'}>¿Dont have an account?</a>
            </div>
        </>
    )
}

export default Register;
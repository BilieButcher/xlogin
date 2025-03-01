import React, { useState } from "react";



const Login = () => {

    const user = "user";
    const password = "password";
    const [showInputs, setShowInputs] = useState(true);
    const [invalid, setInvalid] = useState(false);
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleOnchangeName = (e) => {
        setName(e.target.value);
    }

    const handleOnChangePass = (e) => {
        setPass(e.target.value);
    }

    const submit = (e) => {

        
        if(name === "" && pass === "") return;
        if(name === user && pass === password){
            setShowInputs(false);
            setInvalid(false);
        }else{
            setInvalid(true);
        }
        e.preventDefault();

    }

    return(
        <div >


            <h1>Login Page</h1>
            {invalid ? <p>Invalid username or password</p> : () => {return;}}
            {showInputs ? <form id="form">
                <div>
                <label>Username</label>
                <input  type="text" required value={name} onChange={(e) => {handleOnchangeName(e)}}  />
                </div>

                <div>
                <label>Password</label>
                <input  type="password" required value={pass} onChange={(e) => {handleOnChangePass(e)}}  />
                </div>
                <br/>
                <button type="submit" form="form" onClick={(e) => {submit(e)}}>Submit</button>

            </form> : <p>Welcome, user</p>}
        </div>
    )
}
export default Login;
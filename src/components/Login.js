import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

export const Login = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <h1>Login page</h1><h1>Login user</h1>
            <input placeholder="Email" onChange={(event) => setLoginEmail(event.target.value)}></input>
            <input type="password" onChange={(event) => setLoginPassword(event.target.value)} placeholder="Password"></input>
            <button onClick={login}> Login</button>
        </div>

    )
}
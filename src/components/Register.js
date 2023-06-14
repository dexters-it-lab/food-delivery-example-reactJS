import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

export const Register = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword
                (
                    auth,
                    registerEmail,
                    registerPassword
                );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <h1>Register user</h1>
            <input placeholder="Email" onChange={(event) => setRegisterEmail(event.target.value)} ></input>
            <input type="password" onChange={(event) => setRegisterPassword(event.target.value)} placeholder="Password"></input>
            <button onClick={register}> Register</button>

        </div>

    )
}
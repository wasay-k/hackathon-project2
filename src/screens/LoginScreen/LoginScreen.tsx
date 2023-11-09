import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button"
import TextBox from "../../components/TextBox"
import { useEffect, useState } from "react";
import { login } from "./login";




const LoginScreen = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin =async () => {
        const res = await login(email,password,false);
        if (res===true) {
            navigate("/main")
        }
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col space-y-4 m-4">
            <div className="text text-center text-xl font-extrabold">
                Login to your account
            </div>
            <TextBox defaultText="Email" setStateVariable={setEmail}/>
            <TextBox defaultText="Password" setStateVariable={setPassword}/>
            <Button buttonText="Login" clickEvent={handleLogin}/>
            <div className="flex flex-row space-x-2 justify-end">
                <div className="text font-light">Don't have an account?</div>
                <Link to={"/signup"}>Sign up</Link>
            </div>
            </div>
        </div>
    )
}

export default LoginScreen;
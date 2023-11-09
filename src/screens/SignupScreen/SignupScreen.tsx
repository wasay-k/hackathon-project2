import { useState } from "react";
import Button from "../../components/Button";
import TextBox from "../../components/TextBox";
import FormContainer from "../../components/form-container";
import { signUpAndLogin } from "./signup";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";



const SignupScreen = () => {

    const [username,setUsername] = useState("");
    const [emailAddress,setEmailAddress] = useState("")
    const [password,setPassword] = useState("")
    const [alertState,setAlertState] = useState<boolean|null>(null)
    const navigate = useNavigate();

    const handleSignUp =async () => {
        const res = await signUpAndLogin(emailAddress,password,username);
        if (res===true) {
            navigate("/main");
        }else{
            setAlertState(false);
        }
    }

    return(
        <div className="h-screen flex justify-center items-center">
            <div>
            <FormContainer>
                <div className="text text-center font-bold text-lg">
                    Welcome to the Hackathon Project!
                </div>
                <div className="text text-center font-light text-base">Set up an account to get started</div>
                <div className="flex flex-col space-y-4 m-4">
                <TextBox defaultText="Name" setStateVariable={setUsername}/>
                <TextBox defaultText="Email address" setStateVariable={setEmailAddress}/>
                <TextBox defaultText="Password" setStateVariable={setPassword} />
                </div>
                <div className="flex flex-row justify-end">
                    <Button buttonText="Sign up" clickEvent={async()=>{handleSignUp()}}/>
                </div>
            </FormContainer>
            {alertState===false && (
                <Alert alertState="error" alertMessage="Failed to sign up. Please try again"/>
            )}
            </div>
        </div>
    )
}

export default SignupScreen;
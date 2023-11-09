import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseconfig";


export const login =async (email:string,password:string,firstTimeSignIn:boolean,name?:string,) => {
    try {
    await signInWithEmailAndPassword(auth,email,password);
    if (firstTimeSignIn && name) {
        
        
            
            window.electron.writeUserData({
                name,
                email,
                password
            })
        
    }
    return true;
    } catch (error) {
        return false;
    }
}
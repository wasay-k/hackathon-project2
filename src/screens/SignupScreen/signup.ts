import { createUserWithEmailAndPassword,  } from "firebase/auth"
import { auth, db } from "../../../firebaseconfig"
import {doc, setDoc } from "firebase/firestore";
import { login } from "../LoginScreen/login";


const signUpUser =async (email:string,password:string,name:string) => {
    try {
    const userCredential = await createUserWithEmailAndPassword(auth,email,password);
    const userDocRef = doc(db,`users/${userCredential.user.uid}`);
    await setDoc(userDocRef,{
        homeAddress: "",
        discoverable: false
    })
    return true;
    } catch (error) {
        console.error(error);
        return false;
    }
    
}

export const signUpAndLogin =async (email:string,password:string,name:string) => {
    try{
        const signUpSuccessful = await signUpUser(email,password,name);
        if (signUpSuccessful) {
            const loginSuccesful = await login(email,password,name,true);
            if (loginSuccesful) {
                return true;
            }else{
                throw new Error("login failed");
            }
        }else{
            throw new Error("signup failed");
        }
    }catch(error){
        return false;
    }
}


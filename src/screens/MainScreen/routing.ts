import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseconfig";


const getNearestBusStation =() => {
    return "Bone and joint clinic, Red Line Bus Service"
};

const getIntermediatoryStop = () => {
    return "Numaish, Green Line BRTS"
}

const getDropoffBusStop = () => {
    return "Erum, Shadman No.2, Green Line BRTS"
}

export const getBusRoutes = () => {
    const routes:string[] = [getNearestBusStation(),getIntermediatoryStop(),getDropoffBusStop()]
    return routes;
}

export const getAvailableRideSharers = async() => {
    try {
        const colRef = collection(db,"users")
    const compoundQuery = query(colRef,where("discoverable","==",true),where("currentState.isTravelling","==",true),where("currentState.modeOfTravel","==","car"));
    const results = await getDocs(compoundQuery);
    let names:string[] = [];
    results.forEach((doc)=>{
        names.push(doc.get("name"))
    })
    return names;
    } catch (error) {
        console.error(error);
        return null;
    }
}
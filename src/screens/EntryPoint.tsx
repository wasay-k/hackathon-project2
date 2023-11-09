import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";




const EntryPoint = () => {

    const [data,setData] = useState<string|null>()
    const [retrievalComplete,setRetrievalHasCompleted] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        //on mount, retrieve locally stored user details
        const getData =async () => {
            const res:string|null = await window.electron.retrieveUserData();
            setData(res);
            setRetrievalHasCompleted(true);
        }
        getData();
    },[])

    useEffect(()=>{
        if (retrievalComplete===true) {
            if (data===null) {
                //user isnt logged in
                navigate("/login");
            }
        }
    },[retrievalComplete])
    return (
        <div className="h-screen flex justify-center items-center">
            {retrievalComplete===false && (
        <Loading size="lg"/>
            )}
        </div>
    )
}

export default EntryPoint;
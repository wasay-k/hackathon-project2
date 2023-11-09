import { useEffect, useState } from "react"
import { getAvailableRideSharers } from "../routing"
import Button from "../../../components/Button"
import Overlay from "../../../components/Overlay"



const RideSharingScreen = () => {

    const [availableRideSharers,setAvailableRideShares] = useState<string[]>([])
    const [fetchingCompleted,setHasFetchedData] = useState(false)
    const [showPopup,setShowPopup] = useState(false)

    useEffect(()=>{
        const getRideSharers =async () => {
            const res = await getAvailableRideSharers();
            if (res!==null) {
                setAvailableRideShares(res);
                setHasFetchedData(true);
            }
        }
        getRideSharers();
    },[])
    if (fetchingCompleted) {
        return (
            <div className="flex flex-col">
                <div className="text font-semibold">{`${availableRideSharers.length} are willing to share a ride`}</div>
                {availableRideSharers.map((sharerName)=>(
                    <div className="flex flex-row space-x-4">
                    <div className="text font-light">{sharerName}</div>
                    <Button buttonText="Accept" clickEvent={()=>{setShowPopup(true)}}/>
                    </div>
                ))}
                {showPopup && (
                    <Overlay onClose={()=>{setShowPopup(false)}}>
                        <div className="text font-semibold">Have a safe ride</div>
                    </Overlay>
                )}
            </div>
        )
    }
}

export default RideSharingScreen;
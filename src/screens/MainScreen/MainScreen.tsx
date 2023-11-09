
import MapView from "./renderMap";
import Card from "../../components/Card";
import TaxiLogo from "../../../public/icons/taxi.png"
import RideSharingLogo from "../../../public/icons/car.png"
import BusLogo from "../../../public/icons/bus.png"
import TextBox from "../../components/TextBox";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { getBusRoutes} from "./routing";
import RideSharingScreen from "./Ridesharing/RidesharingScreen";

const MainScreen  = () => {

    const [currentLocationString,setCurrentLocationString] = useState("Default (GPS)")
    const [destinationString,setDestinationString] = useState("")
    const [currentLocationCoords,setCurrentLocationCoords] = useState({ lat:24.823979582678493, lng:67.02579104796116 })
    const [destinationCoords,setDestinationCoords] = useState<{lat: number, lng: number}|null>(null)
    const [displayMode,setDisplayMode] = useState("menu")
    const [busRoutes,setBusRoutes] = useState<string[]>([])

    useEffect(()=>{
        if (displayMode==="bus") {
            setBusRoutes(getBusRoutes())
        }
    },[displayMode])

    return(
        <div className="h-screen flex flex-col justify-center items-center">
            <NavBar />
            <MapView setCurrentLocationCoords={setCurrentLocationCoords}/>
            <div className="flex flex-col h-1/3 w-full overflow-x-scroll m-4">
                {displayMode==="menu" && (
                    <>
                    <div className="flex flex-row m-4 space-x-4">
                    <Card cardHeader="Ridesharing" imageSrc={RideSharingLogo} onClick={()=>{setDisplayMode("ridesharing")}}/>
                    <Card cardHeader="Bus" imageSrc={BusLogo} onClick={()=>{setDisplayMode("bus")}}/>
                    <Card cardHeader="Taxi" imageSrc={TaxiLogo}/>
                    <Card cardHeader="Ride" imageSrc={TaxiLogo}/>
                </div>
                <div className="ml-4 mt-12"> 
                <TextBox defaultText="Current location: Karachi Grammar School" setStateVariable={setCurrentLocationString}/>
                <TextBox defaultText="Destination" setStateVariable={setDestinationString}/>
                </div>
                </>
                )}
                {displayMode==="bus" && (
                    <div className="flex flex-col m-4">
                        <button className="btn btn-circle" onClick={()=>{setDisplayMode("menu")}}>
                            {`<`}
                        </button>
                        {busRoutes.map((routeName,index)=>(
                            <div className="text text-md font-light">{`Stop ${index+1}:  ${routeName}`}</div>
                        ))}
                    </div>
                )}
                {displayMode==="ridesharing" && (
                    <div className="flex flex-col m-4">
                    <button className="btn btn-circle" onClick={()=>{setDisplayMode("menu")}}>
                        {`<`}
                    </button>
                    <RideSharingScreen />
                </div>
                )}
            </div>
                
        </div>
    )
}

export default MainScreen;
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
import { FC, useEffect, useMemo, useState } from "react";
import Loading from "../../components/Loading";


interface Props {
    setCurrentLocationCoords: React.Dispatch<React.SetStateAction<{
        lat: number;
        lng: number;
    }>>
}

const MapView:FC<Props>  = ({setCurrentLocationCoords}) => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyBosf_bdEuO_YH8aAzCQmo8Mxhte23qrfw"
    })
    const [center,setCenter] = useState({ lat:24.823979582678493, lng:67.02579104796116 })

    useEffect(()=>{
        if (navigator) {
            navigator.geolocation.getCurrentPosition((posn:GeolocationPosition)=>{
                const pos = {
                    lat: posn.coords.latitude,
                    lng: posn.coords.longitude,
                  };
        setCenter(pos);
            })
        }
    },[])

    useEffect(()=>{
        setCurrentLocationCoords(center);
    },[center])

    return(
        <div className="h-full w-full justify-center items-center">
            {isLoaded? (
                <>
                <GoogleMap mapContainerClassName="h-full w-full" center={center} zoom={10}>
                <Marker position={center}/>
                </GoogleMap>
                </>
            ):(
                <Loading size="lg"/>
            )}
        </div>
    )
}

export default MapView;
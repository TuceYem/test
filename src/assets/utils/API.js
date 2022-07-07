import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export const useDefaultHomeFetch = () => {
    const [longitude, setLongitude] = useState()
    const [latitude, setLatitude] = useState()
    const [canteens, setCanteens] = useState([])

    const getLocation = async () => {
        if (!navigator.geolocation) {
            console.log("test1")
            toast.error("Standortfunktion wird nicht unterstützt.")
            console.log("test3")
        } else {
            console.log("tes3")
            await navigator.geolocation.getCurrentPosition(showPosition)
            console.log("test5")
        }
    }

    function showPosition (position) {
        console.log("here")
        setLatitude(position.coords.latitude)
        console.log("here22")
        setLongitude(position.coords.longitude)
        console.log(latitude)

    }

    const fetchMensen = async (lat, lng) => {

        const response = await fetch(`https://openmensa.org/api/v2/canteens?near[lat]=${lat}&near[lng]=${lng}&near[dist]=30`)

        const data = await response.json()
        console.log("hello")
        setCanteens(data)
        console.log("hello2")
    }

    useEffect(() => {
        getLocation()
        console.log("hello3")
        fetchMensen(latitude, longitude)
        console.log("hello4")
    }, [getLocation()])

    return { canteens }
}


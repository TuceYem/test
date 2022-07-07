import MensaSearch from "../components/Mensen/MensaSearch";
import { useEffect, useState } from "react";

function Home() {
    // Error State
    const [error, setError] = useState(false)
    // Loading State
    const [loading, setLoading] = useState(false)

    // Funktion um die Mensen zu fetchen
    const fetchMensen = async (input = "") => {
        try {
            setError(false)
            setLoading(true)

            // Hier Backend zum fetchen der Mensen per Name
            const response = await fetch(``)

            const { mensen } = await response.json()

            return mensen
        } catch (e) { setError(true) }

        setLoading(false)
    }

    useEffect(() => {

        fetchMensen()
    })


    return (
        <div>
            <MensaSearch />
        </div>
    )
}

export default Home

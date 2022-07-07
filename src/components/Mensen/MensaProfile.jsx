import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MensaCard from "./MensaCard";
import MealCard from "./MealCard";

function MensaProfile() {
    const { id } = useParams()

    const [mensa, setMensa] = useState()

    const name = "Hochschule für Technik und Wirtschaft"

    const address = "Das ist Teststraße 11"

    const city = "Berlin"

    useEffect(() => {
        const getMensa = async () => {
            const response = await fetch(`https://openmensa.org/api/v2/canteens/${id}`)

            const data = await response.json()

            console.log(data)
            setMensa(data)
        }

        getMensa()
    }, [])

    return (
        <div className="profile-body flex-column">
            <div className="profile-header">
                <div className="profile-name">
                    {name}
                </div>

                <div className="profile-address">
                    <div className="profile-street">
                        {address}
                    </div>

                    <div className="profile-city">
                        {city}
                    </div>
                </div>
            </div>

            <div className="meal-header">
                These are the current <span className="special-title text-uppercase">meals</span>
            </div>

            <div style={{ width: "100%" }}>
                <MealCard />
            </div>
        </div>
    )
}

export default MensaProfile

import {useDefaultHomeFetch} from "../assets/utils/API";
import MensaCard from "../components/Mensen/MensaCard";

function Mensen() {
    const { canteens } = useDefaultHomeFetch()

    return (
        <div>
            {canteens.map((mensa) => (
                <MensaCard id={mensa.id} mensa={mensa} />
            ))}
        </div>
    )
}

export default Mensen

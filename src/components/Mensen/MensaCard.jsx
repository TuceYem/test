import {Link} from "react-router-dom";

function MensaCard({ mensa }) {
    return (
        <Link to={`/mensa/${mensa.id}`} style={{ textDecoration: "none"}}>
            <div className="card flex-row">
                <div className="title-bg remove">
                    <div className="card-titel">
                        {mensa.name}
                    </div>
                </div>

                <div className="card-address flex-column">
                    <div className="card-address-body">
                        <div className="card-address-street">
                            {mensa.address}
                        </div>

                        <div className="card-address-city text-uppercase">
                            {mensa.city}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MensaCard

import {useState} from "react";
import Menu from "./Menu";
import {FaBars} from "react-icons/fa";
import Logo from "../../assets/logo.png"
import {GiFruitBowl} from "react-icons/gi";
import {Collapse} from "react-bootstrap";

function Navbar() {
    const [checked, setChecked] = useState(false)

    const handleClick = () => {
        setChecked(!checked)
    }

    return (
        <div className="shadow p-3 mb-5 bg-white my-menu rounded">
            <nav className="navbar navbar-white bg-white">
                <div className="container-fluid">
                    <h4 onClick={handleClick}>
                        <FaBars className="fw-bold"/>
                    </h4>

                    <div className="brand">
                        <GiFruitBowl size={40}/>
                        <p> Foodlocker </p>
                    </div>
                </div>

                { checked && <Menu /> }
            </nav>
        </div>
    )
}

export default Navbar

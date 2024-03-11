import { Link } from "react-router-dom";
import "./index.css";

const Header =()=>{
    return (
        <div className="header-section">
            <ul className="nav-list">

                <Link to="/" className="my-link-el">
                <li className="nav-element">Home</li>
                </Link>

                <Link to="/about" className="my-link-el">
                <li className="nav-element">About</li>
                </Link>

                <Link to="/services" className="my-link-el">
                <li className="nav-element">Services</li>
                </Link>

            </ul>
        </div>
    )
}



export default Header;
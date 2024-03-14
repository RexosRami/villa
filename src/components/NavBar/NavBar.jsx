import "./NavBar.css"
import { SlCalender } from "react-icons/sl";

const NavBar = () => {
  return (
    <div className="navbar">
        <h1 className="navtitle">
            Villa
        </h1>
        <ul className="navul">
            <li className="li">Home</li>
            <li className="li">Properties</li>
            <li className="li">Property Details</li>
            <li className="li">Contact Us</li>
            <li className="special">
                <div>
                <SlCalender size={20} className="icon" />
                </div>
                <p>Schedule a visit</p>
            </li>
        </ul>
    </div>
  )
}

export default NavBar
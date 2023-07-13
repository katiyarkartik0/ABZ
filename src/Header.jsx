import { NavLink, useNavigate } from 'react-router-dom'
import './App.css'

export const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="header">
            <div className='logo' onClick={() => navigate("/")}></div>
            <NavLink to="/aboutUs" className="headerButton">About Us</NavLink>
            <NavLink to="/zeelaOnBoard" className="headerButton">Zeela onboard</NavLink>
            <NavLink to="/departments" className="headerButton">Departments</NavLink>
            <NavLink to="/careers" className="headerButton">Careers</NavLink>
        </div>
    )
}
import { NavLink, useNavigate } from 'react-router-dom'
import './App.css'

export const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="header">
            <div className='logo' onClick={() => navigate("/")}></div>
            <br></br>
            <NavLink to="/aboutUs" className="headerButton">About Us</NavLink>
            <NavLink to="/talkToZeela" className="headerButton">Talk to zeela</NavLink>
            <NavLink to="/onBoard" className="headerButton">Onboard</NavLink>
            <NavLink to="/sourcingPlatforms" className="headerButton">Sourcing platforms</NavLink>
            <NavLink to="/currentOpenings" className="headerButton">Current Openings</NavLink>
            <NavLink to="/candidateProfiling" className="headerButton">Candidate Profiling</NavLink>
        </div>
    )
}
import { NavLink } from "react-router-dom"
import "./Home.css"
export const Home = () => {
    return (
        <>
            <div className='hero_section'></div>
            <div className='foodDisplay'>
                <NavLink to="/aboutUs" className="headerButtonHomePage">About Us</NavLink>
                <NavLink to="/zeelaOnBoard" className="headerButtonHomePage">Zeela onboard</NavLink>
                <NavLink to="/departments" className="headerButtonHomePage">Departments</NavLink>
                <NavLink to="/careers" className="headerButtonHomePage">Careers</NavLink>
            </div>

        </>

    )
}
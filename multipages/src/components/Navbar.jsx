import { NavLink } from "react-router-dom"

function Header() {
     return (
          <div className="navbar">
               <NavLink to="/">Home</NavLink>
               <NavLink to="/about">About</NavLink>
               <NavLink to="/services">Services</NavLink>
               <NavLink to="/contact">Contact</NavLink>
          </div>
     )
}

export default Header



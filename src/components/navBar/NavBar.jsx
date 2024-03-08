import "./navBar.css"
import {NavLink} from "react-router-dom";


function NavBar({navLogo}) {
    return (
        <div className="navbar">
          <img src={navLogo} alt="logo" className="navlogo"/>
          <ul className="navlist">
              <li>
                  <NavLink to="/" className={({isActive}) => isActive===true ? "navlink-active" : "navlink-default"}>
                      Home
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/overview" className={({isActive}) => isActive===true ? "navlink-active" : "navlink-default"}>
                      Overzicht
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/newblog" className={({isActive}) => isActive===true ? "navlink-active" : "navlink-default"}>
                      Nieuwe blog maken
                  </NavLink>
              </li>
          </ul>  
        </div>
    );
}

export default NavBar;
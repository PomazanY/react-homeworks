import { NavLink } from "react-router-dom";

const NavMenu = ()=>{
    return(
        <ul>
        <li>
            <NavLink to='/'>Main page</NavLink>
        </li>
        <li>
            <NavLink to='/posts'>Posts</NavLink>
        </li>
    </ul>
    )
}
export default NavMenu;
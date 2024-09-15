import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
       <nav>
        <ul>
            <li>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/favorites'}>Favorites</NavLink>
            </li>
        </ul>
       </nav>
        
    </div>
  )
}

export default Navbar
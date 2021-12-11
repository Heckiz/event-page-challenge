import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar:FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar:FC = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar

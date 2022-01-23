import {NavLink} from 'react-router-dom'

function DashboardNavigation() {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/categories/All">All</NavLink></li>
                <li><NavLink to="/categories/Cat">Cats</NavLink></li>
                <li><NavLink to="/categories/Dog">Dogs</NavLink></li>
                <li><NavLink to="/categories/Parrot">Parrots</NavLink></li>
                <li><NavLink to="/categories/Reptile">Reptiles</NavLink></li>
                <li><NavLink to="/categories/Other">Other</NavLink></li>
            </ul>
        </nav>
    )
}

export default DashboardNavigation;

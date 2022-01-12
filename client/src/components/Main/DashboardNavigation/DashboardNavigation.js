import {Link} from 'react-router-dom'

function DashboardNavigation() {
    return (
        <nav class="navbar">
            <ul>
                <li><Link to="/categories/all">All</Link></li>
                <li><Link to="/categories/cats">Cats</Link></li>
                <li><Link to="/categories/dogs">Dogs</Link></li>
                <li><Link to="/categories/parrots">Parrots</Link></li>
                <li><Link to="/categories/reptiles">Reptiles</Link></li>
                <li><Link to="/categories/other">Other</Link></li>
            </ul>
        </nav>
    )
}

export default DashboardNavigation;

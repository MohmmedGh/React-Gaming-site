import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../asset/images/logo.png'
import profile from '../../asset/images/profile-header.jpg'
import NavItem from './../../component/NavItem/NavItem';
import { PrimaryButtonSm } from '../../component';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark container my-nav">
            <Link className="navbar-brand" to='/'>
                <img src={logo} alt='logo' />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav my-nav-list">
                    <NavItem>
                        <Link className="nav-link active" to='/'>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to='/browse'>Browse</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to='/details'>Details</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to='/stream'>Stream</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/profile'>
                            <PrimaryButtonSm className="nav-link">
                                <span> Profile</span>
                                <img className='profile-img' src={profile} alt={profile} />
                            </PrimaryButtonSm>
                        </Link>
                    </NavItem>
                </ul>
            </div>
        </nav>
    )
}

export default Header
import { Link, NavLink } from 'react-router-dom'; 

import './appHeader.sass';
import logo from '../../resources/img/logo.svg';

const AppHeader = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <Link to="/" className="header__logo-link">
                    <img className="header__logo-img" src={logo} alt="Studio Ghibli"/>
                </Link>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            <NavLink 
                                className="header__item-link"
                                style={({ isActive }) => ({color: isActive ? '#317af9' : 'inherit'})}
                                to="/films">
                                Films
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink 
                                className="header__item-link"
                                style={({ isActive }) => ({color: isActive ? '#317af9' : 'inherit'})}
                                to="/people">
                                People
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;
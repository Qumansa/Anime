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
            </div>
        </header>
    );
};

export default AppHeader;
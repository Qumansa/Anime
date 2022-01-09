import './appheader.sass';
import logo from '../../resources/img/logo.svg';

const AppHeader = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <a className="header__logo-link" href="/">
                    <img className="header__logo-img" src={logo} alt="Studio Ghibli"/>
                </a>
            </div>
        </header>
    );
};

export default AppHeader;
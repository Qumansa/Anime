import { Link } from 'react-router-dom';

import '../../style/page404.sass'
import image from '../../resources/img/404.png'

const Page404 = () => {
    return (
        <section className="page404 section">
            <h1 className="sr-only">404 Page not found!</h1>
            <div className="page404__container container">
                <img src={image} alt="Page not found!" className="page404__img"/>
                <Link to="/" className="page404__link">Back to main page</Link>
            </div>
        </section>
    );
};

export default Page404;
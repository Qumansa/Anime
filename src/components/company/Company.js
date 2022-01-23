import './company.sass';

import company from '../../resources/img/company.jpg';

const Company = () => {
    return (
        <section className="company last-section">
            <div className="container">
                <h2 className="section__title">What is Ghibli Studio?</h2>
                <div className="company__wrapper">
                    <div className="company__descr">
                        <p className="company__text">— a Japanese animation film studio headquartered in Koganei, Tokyo.</p>
                        <p className="company__text">It was founded by:</p> 
                        <ul className="company__list">
                            <li className="company__item">animator, director, producer, screenwriter, author, and manga artist Hayao Miyazaki;</li>
                            <li className="company__item">Japanese film director Isao Takahata;</li>
                            <li className="company__item">and producer Toshio Suzuki.</li>
                        </ul>
                        <p className="company__text">Over the last 37 years, we’ve created 20 feature films (and counting), plus several short films, and television commercials. On our portal you can find more information about beloved films and characters. Enjoy!</p>
                    </div>
                    <img className="company__img" src={company} alt="Hayao Miyazaki with several characters"/>
                </div>
            </div>
        </section>
    );
};

export default Company;
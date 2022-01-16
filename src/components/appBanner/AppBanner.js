import './appBanner.sass';

// import banner from '../../resources/img/banner'

const AppBanner = () => {
    return (
        <section className="banner section">
            <h2 className="sr-only">Banner</h2>
            <div className="banner__container container">
                <span className="banner__text">Here you can find</span>
                <span className="banner__text">detailed information about every Ghibli anime!</span>
            </div>
        </section>
    );
};

export default AppBanner;
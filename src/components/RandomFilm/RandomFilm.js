import filmImg from '../../resources/img/test.jpeg';
import './randomFilm.sass'

const RandomFilm = () => {
    return (
        <div className="random section">
            <h2 className="sr-only">Choose a film</h2>
            <div className="random__container container">
                <article className="random__info">
                    <img src={filmImg} alt="#" className="random__info-img"/>
                    <div className="random__info-descr">
                        <h3 className="random__info-title">Заголовок</h3>
                        <p className="random__info-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat similique aliquam omnis cupiditate distinctio, unde at hic tempora amet repellendus doloremque nulla vero iusto voluptate voluptas incidunt eaque? Numquam, sit.</p>
                    </div>
                </article>
                <div className="random__try">
                    <span className="random__try-text">Random anime for today!</span>
                    <span className="random__try-text random__try-text_choose">Or choose another one</span>
                    <button className="random__try-btn">Try it!</button>
                </div>
            </div>
        </div>
    );
};

export default RandomFilm;
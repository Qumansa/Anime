import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import useGhibliService from '../../service/GhibliService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import createImage from "../../utils/createImage";
import transformName from "../../utils/transformName";

import './character.sass';

const Character = () => {
    const {error, getCharacter, getFilm, loading, setLoading} = useGhibliService();
    const [character, setCharacter] = useState({});
    const [filmTitle, setFilmTitle] = useState(null);
    const {id} = useParams();

    const onFilmLoaded = (film) => {
        setFilmTitle(film.title);
        setLoading(false);
    };

    const onCharacterLoaded = (character) => {
        setCharacter(character);

        const filmId = character.films[0].replace('https://ghibliapi.herokuapp.com/films/', '');
        getFilm(filmId)
            .then(onFilmLoaded);
        
    };

    const updateCharacter = () => {
        getCharacter(id)
            .then(onCharacterLoaded);
    };

    useEffect(() => {
        updateCharacter();
    }, [id]);

    const {age, eyeColor, gender, hairColor, name} = character;

    const image = createImage(name);
    const transformedName = transformName(name);

    const View = () => {
        return (
            <div className="character__wrapper">
                <img src={image} alt={transformedName} className="character__img"/>
                <div className="character__main">
                    <div className="character__header">
                        <h2 className="character__title">{transformedName}</h2>
                        <Link className="character__back" to="/characters">Back to all</Link>
                    </div>
                    <ul className="character__info">
                        <li className="character__info-item">
                            <span className="character__text">Anime: </span>
                            <span className="character__value">{filmTitle}</span>
                        </li>
                        <li className="character__info-item">
                            <span className="character__text">Gender: </span>
                            <span className="character__value">{gender}</span>
                        </li>
                        <li className="character__info-item">
                            <span className="character__text">Age: </span>
                            <span className="character__value">{age}</span>
                        </li>
                        <li className="character__info-item">
                            <span className="character__text">Eye color: </span>
                            <span className="character__value">{eyeColor}</span>
                        </li>
                        <li className="character__info-item">
                            <span className="character__text">Hair color: </span>
                            <span className="character__value">{hairColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading) && !(error) ? <View/> : null;

    return (
        <section className="character section last-section">
            {/* <h1 className="sr-only">{title}</h1> */}
            <div className="container">
                {errorMessage}
                {spinner}
                {content}
            </div>
        </section>
    );
};

export default Character;
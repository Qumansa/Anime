import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import useGhibliService from '../../service/GhibliService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import getFilmDuration from '../../utils/getFilmDuration';

import './film.sass';

const Film = () => {
    const {error, getFilm, loading} = useGhibliService();
    const [film, setFilm] = useState({});
    const {id} = useParams();

    const onFilmLoaded = (film) => {
        setFilm(film);
    };

    const updateFilm = () => {
        getFilm(id)
            .then(onFilmLoaded);
    };

    useEffect(() => {
        updateFilm();
    }, [id]);

    const {description, director, image, originalTitle, producer, rating, releaseDate, runningTime, title} = film;
    
    const duration = getFilmDuration(runningTime);

    const View = () => {
        return (
            <div className="film__wrapper">
                <img src={image} alt={title} className="film__img"/>
                <div className="film__main">
                    <div className="film__header">
                        <h2 className="film__title">
                            <span className="film__title-text film__title-text_eng">{title}</span>
                            <span className="film__title-text film__title-text_jp">{originalTitle}</span>
                        </h2>
                        <Link className="film__back" to="/films">Back to all</Link>
                    </div>
                    <ul className="film__info">
                        <li className="film__info-item">
                            <span className="film__text">Producer: </span>
                            <span className="film__value">{producer}</span>
                        </li>
                        <li className="film__info-item">
                            <span className="film__text">Director: </span>
                            <span className="film__value">{director}</span>
                        </li>
                        <li className="film__info-item">
                            <span className="film__text">Released in: </span>
                            <span className="film__value">{releaseDate}</span>
                        </li>
                        <li className="film__info-item">
                            <span className="film__text">Duration: </span>
                            <span className="film__value">{runningTime} min./{duration}</span>
                        </li>
                        <li className="film__info-item">
                            <span className="film__text">Rating: </span>
                            <span className="film__value">{rating}/100</span>
                        </li>
                    </ul>
                    <div className="film__descr">{description}</div>
                </div>
            </div>
        );
    };

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading) && !(error) ? <View/> : null;

    return (
        <section className="film section last-section">
            <h1 className="sr-only">{title}</h1>
            <div className="container">
                {errorMessage}
                {spinner}
                {content}
            </div>
        </section>
    );
};

export default Film;
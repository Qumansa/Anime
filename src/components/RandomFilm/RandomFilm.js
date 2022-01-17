import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

import useGhibliService from '../../service/GhibliService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomFilm.sass';

let idsList = [];

const RandomFilm = () => {
    const {error, getFilm, getFilmsList, getIdsList, loading} = useGhibliService(); 
    const [film, setFilm] = useState({});
    // const [idsList, setIdsList] = useState(null);
    
    // ХОТЬ КАКОЙ-ТО РАБОЧИЙ ВАРИАНТ.
    // 1) Без state idsList. Переменная idsList вынесена за компонент. 
    // 2) idsList записывается один раз. запрос getFilmsList() совершается один раз
    useEffect(() => { 
        updateFilm();
    }, []);

    const updateFilm = () => {
        if (idsList.length <= 0) {
            getFilmsList()
                .then((filmsList) => {
                    idsList = filmsList.map(film => film.id);

                    getFilm(getRandomId(idsList))
                        .then((film) => {
                            // console.log('устанавливаю film')
                            setFilm(film);
                        });
                })
        } else {
            getFilm(getRandomId(idsList))
                .then((film) => {
                    // console.log('устанавливаю film')
                    setFilm(film);
                });
        }
    };

    const getRandomId = (arr) => {
        let random = Math.floor(Math.random() * arr.length);
        return arr[random];
    };

    // ПОПЫТКА СОЗДАТЬ КОЛЛБЕК

    const {description, image, originalTitle, title} = film;

    const shortDescription = description && description.length > 225 
        ? `${description.slice(0, 225)}...` 
        : description;

    const View = () => {
        return (
            <>
                <Link to="/film" className="info__link">
                    <img src={image} alt={title} className="info__img"/>
                </Link>
                <div className="info__main">
                    <h3 className="info__title">
                        <span className="info__title-text info__title-text_eng">{title}</span>
                        <span className="info__title-text info__title-text_jp">{originalTitle}</span>
                    </h3>
                    <p className="info__descr">{shortDescription}</p>
                </div>
            </>
        );
    };

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading) && !(error) ? <View/> : null;

    return (    
        <div className="random section">
            <h2 className="sr-only">Random film</h2>
            <div className="random__container container">
                <article className="info">
                    {errorMessage}
                    {spinner}
                    {content}
                </article>
                <div className="random__try">
                    <span className="random__try-text">Random anime for today!</span>
                    <span className="random__try-text">Have you seen them all?</span>
                    <span className="random__try-text random__try-text_choose">Or choose another one</span>
                    <button 
                        className="random__try-btn"
                        // >
                        onClick={updateFilm}>
                        Try it!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RandomFilm;
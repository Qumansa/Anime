import { useState, useEffect, useCallback, useMemo } from 'react';

import useGhibliService from '../../service/GhibliService';

import './randomFilm.sass';

let idsList = [];

const RandomFilm = () => {
    const {getFilm, getFilmsList, getIdsList} = useGhibliService(); 
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
            // console.log('перезаписываю idslist');
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

    return (    
        <div className="random section">
            <h2 className="sr-only">Choose a film</h2>
            <div className="random__container container">
                <article className="info">
                    <a href="#" className="info__link">
                        <img src={image} alt={title} className="info__img"/>
                    </a>
                    <div className="info__main">
                        <h3 className="info__title">
                            <span className="info__title-text info__title-text_eng">{title}</span>
                            <span className="info__title-text info__title-text_jp">{originalTitle}</span>
                        </h3>
                        <p className="info__descr">{description}</p>
                    </div>
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
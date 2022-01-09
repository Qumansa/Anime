import { useState, useEffect, useCallback, useMemo } from 'react';

import useGhibliService from '../../service/GhibliService';

import filmImg from '../../resources/img/test.jpeg';
import './randomFilm.sass'

const RandomFilm = () => {
    const {getFilm, getFilmsList} = useGhibliService(); 
    const [film, setFilm] = useState({});
    // const [idsList, setIdsList] = useState([]);

    useEffect(() => { 
        updateFilm();
    }, []);

    const updateFilm = () => {
        getFilmsList()
            .then(onFilmsListLoaded)
    };

    const onFilmsListLoaded = (filmsList) => {
        let idsList = [];

        filmsList.forEach(film => {
            idsList.push(film.id);
        });

        getFilm(getRandomId(idsList))
            .then(onFilmLoaded)
    };

    const getRandomId = (arr) => {
        let random = Math.floor(Math.random() * arr.length);
        return arr[random];
    };

    const onFilmLoaded = (film) => {
        setFilm(film);
    };




    

    // useEffect(() => { 
    //     updateFilm();
    // }, []);

    // const updateFilm = () => {
    //     getFilm(getRandomId(idsList))
    //         .then(onFilmLoaded)
    // };

    // const getRandomId = (arr) => {
    //     let random = Math.floor(Math.random() * arr.length);
    //     return arr[random];
    // };

    // const onFilmLoaded = (film) => {
    //     setFilm(film);
    // };

    // useEffect(() => { 
    //     updateIdsList();
    // }, [updateIdsList]);

    // const updateIdsList = () => {
    //     getFilmsList()
    //         .then(onFilmsListLoaded)
    // };

    // const onFilmsListLoaded = (filmsList) => {
    //     let arr = [];

    //     filmsList.map(film => {
    //         return arr.push(film.id);
    //     });  

    //     console.log(arr)

    //     setIdsList([...arr]);

    //     console.log(idsList)
    // };




    // ПОПЫТКА СОЗДАТЬ КОЛЛБЕК
    // let idsList = [];

    // const getIdsList = (filmsList) => {
    //     let arr = [];

    //     filmsList.map(film => {
    //         return arr.push(film.id);
    //     });

    //     return arr;
    // };

    // const onFilmsListLoaded = (filmsList) => {
    //     idsList = getIdsList(filmsList);
    // };
    
    // const updateIdsList = () => {
    //     getFilmsList()
    //         .then(onFilmsListLoaded)
    // };

    // useEffect(() => { 
    //     updateIdsList();
    // }, []);

    // const onFilmLoaded = (film) => {
    //     setFilm(film);
    // };

    // const getRandomId = (arr) => {
    //     let random = Math.floor(Math.random() * arr.length);
    //     return arr[random];
    // };

    // const updateFilm = () => {
    //     getFilm(getRandomId(idsList))
    //         .then(onFilmLoaded)
    // };

    // useEffect(() => { 
    //     updateFilm();
    // }, []);

    





    

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
                        onClick={updateFilm}>
                        Try it!
                        
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RandomFilm;
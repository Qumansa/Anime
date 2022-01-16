import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useGhibliService from '../../service/GhibliService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './filmsList.sass';

const FilmsList = () => {
    const {error, getFilmsList, loading} = useGhibliService();
    const [filmsList, setFilmsList] = useState([]);

    const onFilmsListLoaded = (newFilmsList) => {
        setFilmsList(newFilmsList);
    };

    const updateList = () => {
        getFilmsList()
            .then(onFilmsListLoaded);
    };

    useEffect(() => { 
        updateList();
    }, []);
    
    const renderList = (arr) => {
        const items = arr.map((film, i) => {
            return (
                <li 
                    className="films__item"
                    key={i}>
                    <Link to={`/film`}>
                        <img src={film.image} alt={film.title} className="films__img"/>
                        <h3 className="films__title">
                            <span className="films__title-text films__title-text_eng">{film.title}</span>
                            <span className="films__title-text films__title-text_jp">{film.originalTitle}</span>
                        </h3>
                    </Link>
                </li>
            );
        });

        return (
            <ul className="films__list">
                {items}
            </ul>
        );
    };

    const list = renderList(filmsList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading) ? list : null;

    return (
        <section className="films section">
            <h2 className="sr-only">Films</h2>
            <div className="container">
                {errorMessage}
                {spinner}
                {content}
            </div>
        </section>
    );
}

export default FilmsList;
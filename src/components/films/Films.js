import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useGhibliService from '../../service/GhibliService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './films.sass';

const Films = () => {
    const {error, getFilms, loading, setLoading} = useGhibliService();
    const [films, setFilms] = useState([]);

    const onFilmsLoaded = (newFilms) => {
        setFilms(newFilms);
        setLoading(false);
    };

    const updateList = () => {
        getFilms()
            .then(onFilmsLoaded);
    };

    useEffect(() => { 
        updateList();
    }, []);
    
    const renderList = (arr) => {
        const items = arr.map((film) => {
            const {id, image, originalTitle, title} = film;

            return (
                <li 
                    className="films__item"
                    key={id}>
                    <Link to={`/films/${id}`} className="films__link">
                        <img src={image} alt={title} className="films__img"/>
                        <h3 className="films__title">
                            <span className="films__title-text films__title-text_eng">{title}</span>
                            <span className="films__title-text films__title-text_jp">{originalTitle}</span>
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

    const list = renderList(films);

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

export default Films;